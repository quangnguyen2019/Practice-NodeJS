let db = require("../db");

module.exports.index = (req, res) => {
    let page = req.query.page || 1;
    let numProducts = 8;

    let begin = (page - 1) * numProducts;
    let end = page * numProducts;

    res.render("products/index", {
        products: db.get("products").slice(begin, end).value(),
        page
    });
}