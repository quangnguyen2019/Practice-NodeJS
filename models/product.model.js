let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number
}, { versionKey: '_somethingElse' });

let Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;