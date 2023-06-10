import express from "express";
import { addProduct,register, getAllProducts } from "../controllers/Productconroller.js"

var router = express.Router();

router.post('/register',register)
router.post('/add-product', addProduct)
router.get('/getAllProducts', getAllProducts)


export default router;