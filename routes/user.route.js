let express = require('express');

let controller = require('../controllers/user.controller');
let validate = require('../validate/user.validate');

let router = express.Router();

router.get("/", controller.index);

router.get("/cookie", (req, res) => {
    res.cookie("user_id", 12345);
    res.send("Hello");
});

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", validate.postCreate, controller.postCreate);

module.exports = router;