//requiring mongoose
const mongoose = require("mongoose");

//creating productSchema
const productSchema = {
    producttId: Number,
    productName: String,
    qtyPerUnit: Number,
    unitPrice: Number,
    unitStock: Number,
    discontinued: Boolean,
    categoryId: Number
}

//Creating new collection based on the schemas
const Product = mongoose.model("Product",productSchema);

module.exports = Product;