//requiring mongoose
const mongoose = require("mongoose");

//creating categorySchema
const categorySchema = {
    categoryId: Number,
    categoryName: String,
}

//Creating new collection based on the schemas
const Category = mongoose.model("Category",categorySchema);

module.exports = Category;
