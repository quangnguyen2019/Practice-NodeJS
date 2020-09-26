// let db = require('../db');
// let shortid = require('shortid');

let User = require("../models/user.model");

module.exports.index = async function (req, res) {
    res.render('users/index', {
        // users: db.get('users').value()
        users: await User.find()
    });
};

module.exports.search = async function (req, res) {
    let q = req.query.q;
    // let users = db.get('users').value();
    let users = await User.find();
    let matchUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('users/index', {
        users: matchUsers,
        query: q
    });
};

module.exports.create = function(req, res) {
    // console.log(req.cookies);
    res.render("users/create");
};

module.exports.get = async function(req, res) {
    let id = req.params.id;
    // let user = db.get('users').find({ id: id }).value();

    // _id : MongoDB's default ID field name
    let user = await User.findOne({ _id: id });

    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate = function(req, res) {
    // Add new properties into req.body
    // req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');

    // Push new User to array
    // db.get('users')
    //   .push(req.body)
    //   .write();

    User.create(req.body);
    
    res.redirect('/users');
};