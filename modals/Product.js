import mongoose from "mongoose";
import { Schema } from "mongoose";


const Product = new Schema({
    name: String,
    price: Number,
    // category: String,
    image: [String],
    color: String,
});

const Encrypt = new Schema ({
    name:String,
    password:String,
})


export default mongoose.model("Products", Product)