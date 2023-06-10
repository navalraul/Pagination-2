import mongoose from "mongoose";
import { Schema } from "mongoose";


const addProduct = new Schema({
    
    price: Number,
    category: String,
    brand: String,
    size: String,
    color: String,

});

export default mongoose.model("Product", addProduct)