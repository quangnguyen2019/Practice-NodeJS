let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number
});

let Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;