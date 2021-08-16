//requiring mongoose
const mongoose = require("mongoose");

//creating productSchema
const productSchema = new mongoose.Schema({
    producttId: {
        type: Number,
        required: true,
        unique: [true, "Category ID already present"],
        min: 3,
        max: 3 
    },
    productName: {
        type: String,
        required: true
    },
    qtyPerUnit: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    unitStock: {
        type: Number,
        required: true
    },
    discontinued: {
        type: Boolean,
        required: true
    },
    categoryId: {
        type: Number,
        required: true,
        min: 3,
        max: 3
    }
})

//Creating new collection based on the schemas
const Product = mongoose.model("Product",productSchema);

module.exports = Product;