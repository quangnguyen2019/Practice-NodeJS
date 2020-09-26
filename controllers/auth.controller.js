let md5 = require('md5');

// let db = require("../db");
let User = require("../models/user.model");

module.exports.login = function(req, res) {
    res.render("auth/login")
}

module.exports.postLogin = async function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    // let user = db.get('users').find({ email }).value();
    let user = await User.findOne({ email });
    
    if (!user) {
        res.render("auth/login", {
            errors: [
                "User does not exists."
            ],
            values: req.body
        })
        return;
    }
    
    let hashedPassword = md5(password);

    if (user.password !== hashedPassword) {
        res.render("auth/login", {
            errors: [
                "Password does not correct."
            ],
            values: req.body
        })
        return;
    }

    res.cookie("user_id", user.id, { signed: true });
    res.redirect("/users");
}