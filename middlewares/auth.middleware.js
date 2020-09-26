// let db = require("../db");
let User = require("../models/user.model");

module.exports.requireAuth = (req, res, next) => {
    if (!req.signedCookies.user_id) {
        res.redirect("/auth/login");
        return;
    }

    // let user = db.get("users").find({ 
    //     id: req.signedCookies.user_id 
    // }).value();

    let user = User.findOne({ 
        _id: req.signedCookies.user_id 
    });

    if (!user) {
        res.redirect("/auth/login");
        return;
    }

    res.locals.user = user;
    next();
}