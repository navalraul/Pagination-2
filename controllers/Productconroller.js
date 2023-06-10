import Product from "../modals/Product.js";
import register from "../modals/User.js";
import encrypt from 'encryptjs';


export const add_Product = async (req, res) => {
    try {
        const {  price, category, brand, size, color } = req.body;
        if (!price) return res.send("price is required!");
        if (!category) return res.send("category is requierd!");
        if (!brand) return res.send("brand is requierd!");
        if (!color) return res.send("color is requierd!");

        const product = new Product({
            category: category,
            price: price,
            size: size,
            color: color,
            brand: brand
        })
        console.log(product, "check here")
        await product.save();
        return res.send("product added success");
    } catch (error) {
        console.log(error);
    }
}

export const filter_product = async (req, res) => {
    const products = await Product.find(req.query);

    res.json ({products});


}

export const filterby_price = async (req, res) => {
    try{
        const {firstshot, lastshot} = req.body;

        const response = await Product.find({}).exec();

        const ethe_kahihi_lihu_shakto_ = response.filter(kahipan => kahipan.price  >= firstshot && kahipan.price <= lastshot );

        if(ethe_kahihi_lihu_shakto_.length){
            return res.send(ethe_kahihi_lihu_shakto_);
        }else{
            return res.send("code ghuslare bava, baghu lvde lagle ky tr");
        }
    }catch(err){
        return res.send(err);
    }
}
export const getAllProducts = async (req, res) => {
    try {
        const response = await Product.find({}).exec()
        if (response) {
            return res.send(response);
        } else {
            return res.send("Products not found!")
        }

    } catch (error) {
        return res.send(error);
    }
}


// export const login = async (req, res) => {
//     try{
//         const{ email, password} =req.body;

//         if(!email) return res.send("email is required")
//         if(!password) return res.send("Password is required")

//         var secretkey = "naval123"

//         const User = await register.find({email}).exec()

//         var decipher = (User[0].password, secretkey,256)
//         console.log(decipher)

//         if(decipher == password){
//             return res.send("Login successfull")
//         } else {
//             return res.send("Password not matched")
//         }
//     }catch (error) {
//         return res.send(error);
//     }
// }


export const register_encrypt = async (req, res) => {
    try {
        const { email, password } = req.body;

        let secretkey = 'njhui';

        const encrypt_response = encrypt.encrypt(password, secretkey, 256);

        const user = new register({
            email: email,
            password: encrypt_response
        });

        await user.save();
        return res.send("register success");

    }
    catch (err) {
        return res.send(err);
    }
}

export  const decrypt_login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const response = await register.find({email}).exec();
        if(!response.length) return res.send("user not found");
        let secretkey = 'njhui';

        let decipher = encrypt.decrypt(response[0].password, secretkey, 256);

    if(decipher == password){
        return res.send("login hot");
    }else{
        return res.send(" code ghusla");
    }
    }catch(err){
        return res.send(err);
    }
}


export const product_pagination = async (req, res) => {
    try{
        const {page = 1, limit = 8} = req.body;

        const products = await Product.find().skip((page-1)*limit).limit(limit*1).exec();
        
        const count = Product.count();
        res.json({
            products,
            totalpage: Math.ceil(count/limit),
            currentpage: page
        })



        // if(products.length){
        //     return res.send(products);
        // }else{
        //     return res.send("lvde lagle re bava");
        // }

    }catch(err){
        return res.send(err);
    }
}