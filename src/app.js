//requiring all the required packages
const express = require("express");
const bodyParser = require("body-parser");
const validator = require('validator');
const ejs = require("ejs");
require("./db/conn"); //requiring db connection
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");

const port = process.env.PORT || 3000;

//setting our app
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const Category = require("./models/category.js");
const Product = require("./models/product.js");

//get method is used for /read/productName route
// to read a specific product and fetching its category if exists
app.get("/read/:pName",function(req,res){
    //findOne() method is used to read a specific product having name pName
    Product.findOne({productName: req.params.pName},function(err,foundProduct){
        if(!err){// if every things work perfect
            if(foundProduct){
                Category.findOne({categoryId: foundProduct.categoryId},function(err,foundCategory){// categoryId of the product is used to fetch its category
                    if(!err){
                        if(foundCategory){
                            res.send(foundCategory);// Sending category as response to req
                        }
                        else{
                            res.send(err);
                        }
                    }else{
                        console.log(err);
                    }
                });
            }else{
                res.send("No Product matching that product name was found.");
            }
        }else{
            console.log(err);
        }
    });
});

// using post method for /create route for creating the product and category.
app.post("/create",function(req,res){
    //creating new Product by taking req from body
    const newProduct = new Product({
        producttId: req.body.producttId,
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId
    });
    //creating new Category by taking req from body
    const newCategory = new Category({
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName
    });
    newProduct.save(function(err){// saving new Product document to databse 
        if(!err){
            newCategory.save(function(err){// saving new Category document to databse 
                if(err){
                    console.log(err);
                }else{
                    res.send("Product and Category created successfully.");
                }
            });
        }else{
            console.log(err);
        }
    });
});


var catArray = [];// array for storing all categories

//get method is used for /readall route
// to read a all product and fetching there category if exists in response
app.get("/readall",function(req,res){
    // reading all the products form databse using find method
    Product.find(function(err,foundProducts){
        if(!err){
            if(foundProducts){ 
                foundProducts.forEach(product => { // for each product
                    if(product.categoryId){ // if categoey id of product exists
                        Category.findOne({categoryId: product.categoryId},function(err,foundCategory){ // reading category of id categoryId of product
                            if(!err){ //if there is no error
                                catArray.push(foundCategory); // pushing category to an array catArray
                            }else{
                                res.send(err);
                            }
                        });
                    }
                });                
            }else{
                res.send("No product found.");
            }
        }else{
            res.send("err");
        }
    });
    res.send(catArray);// sending all category documents as a response
    //setting the catArray empty
    if(catArray.length > 0){
        catArray = [];
        catArray.length = 0;
        catArray.splice(0,catArray.length);
    }
});

//usint put and patch method for /update/:pName route
// to update one particular record of the product
app.route("/update/:pName")
.put(function(req,res){// put is used to replace a product document with a new one
    Product.replaceOne(
        {productName: req.params.pName},
        {
            producttId: req.body.producttId,
            productName: req.body.productName,
            qtyPerUnit: req.body.qtyPerUnit,
            unitPrice: req.body.unitPrice,
            discontinued: req.body.discontinued,
            categoryId: req.body.categoryId
        },
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Product updated successfully.");
            }else{
                console.log(err);
            }
        }
    );
})
.patch(function(req,res){// patch is used to modify the existing product document
    Product.updateOne(
        {productName: req.params.pName},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Successfully updated product.");
            }
            else{
                res.send(err);
            }
        }
    );
});

//usint delete method for /delete/:pName route
// to delete one particular record of the product having name specified in the url by user
app.delete("/delete/:pName",function(req,res){
    console.log(req.params.pName);
    Product.deleteOne(
        {productName: req.params.pName},
        function(err){
            if(!err){
                res.send("Deleted product successfully.");
            }else{
                console.log(err);
            }
        }
    );
});

//lisetening to port whatever is ther in environment variable port or 3000
app.listen(port,function(){
    console.log("Server started on port "+port);
});



