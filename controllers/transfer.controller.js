let shortId = require("shortid");

let db = require("../db");
const { partition } = require("../db");

module.exports.create = function(req, res, next) {
    res.render('transfer/index');
}

module.exports.postCreate = function(req, res, next) {
    let data = {
        id: shortId.generate(),
        amount: parseInt(req.body.amount),
        accountId: req.body.accountId,
        userId: req.signedCookies.user_id
    };

    db.get("transfers").push(data).write();
    res.redirect("/transfer/create");
}