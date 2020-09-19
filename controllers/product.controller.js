// let db = require("../db");
let Product = require("../models/product.model");

module.exports.index = async (req, res) => {
    let page = req.query.page || 1;
    let numProducts = 8;

    let begin = (page - 1) * numProducts;
    let end = page * numProducts;

    // res.render("products/index", {
    //     products: db.get("products").slice(begin, end).value(),
    //     page
    // });

    let products = await Product.find();

    res.render("products/index", {
        products: products.slice(begin, end),
        page
    });
}