let db = require("../db");

module.exports.requireAuth = (req, res, next) => {
    if (!req.cookies.user_id) {
        res.redirect("/auth/login");
        return;
    }

    let user = db.get("users").find({ id: req.cookies.user_id }).value();

    if (!user) {
        res.redirect("/auth/login");
        return;
    }

    next();
}