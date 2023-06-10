import express from "express";
import { add_Product,decrypt_login,filter_product,filterby_price,getAllProducts, product_pagination, register_encrypt } from "../controllers/Productconroller.js"

var router = express.Router();

router.post('/encryp_register',register_encrypt)
// router.post('/login',login)
router.post('/add_product', add_Product)
router.get('/getAllProducts', getAllProducts);
router.post("/decrypt_login", decrypt_login);
router.get("/filter_product", filter_product);
router.post("/filterby_price", filterby_price);
router.post("/product_pagination", product_pagination);



export default router;