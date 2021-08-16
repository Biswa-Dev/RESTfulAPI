//requiring mongoose
const mongoose = require("mongoose");

//creating categorySchema
const categorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        required: true,
        unique: [true, "Category ID already present"],
        min: 3,
        max: 3 
    },
    categoryName: {
        type: String,
        required: true
    }
})

//Creating new collection based on the schemas
const Category = mongoose.model("Category",categorySchema);

module.exports = Category;
