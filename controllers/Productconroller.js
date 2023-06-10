import Product from "../modals/Product.js";


export const addProduct = async (req, res) => {
    try {
        const { Name, Price, Image, Color } = req.body;
        if (!Name) return res.send("Name is required!");
        if (!Price) return res.send("Price is requierd!");
        if (!Image) return res.send("Price is requierd!");
        if (!Color) return res.send("Price is requierd!");
        const product = new Product({
            name: Name,
            price: Price,
            image: Image,
            color: Color,
        })
        console.log(product,"check here")
        await product.save();
        return res.send(product);
    } catch (error) {
        console.log(error)
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

export const register = async (req, res) => {
    try{
        const { Name, Password} = req.body;
        if(!Name) return res.send("!Name required")
        if(!Password) return res.send("!Password required")
        const Encrypt = new register ({
            name: Name,
            password:Password,
        }) 
        console.log(Encrypt)
    }catch (error){
        return res.send(error)
    }
}