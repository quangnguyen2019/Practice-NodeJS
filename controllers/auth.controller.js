let db = require("../db");

module.exports.login = function(req, res) {
    res.render("auth/login")
}

module.exports.postLogin = function(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    let user = db.get('users').find({ email }).value();
    
    if (!user) {
        res.render("auth/login", {
            errors: [
                "User does not exists."
            ],
            values: req.body
        })
        return;
    }
    
    if (user.password !== password) {
        res.render("auth/login", {
            errors: [
                "Password does not correct."
            ],
            values: req.body
        })
        return;
    }

    res.cookie("user_id", user.id);
    res.redirect("/users");
}