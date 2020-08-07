let express = require('express');

let controller = require('../controllers/user.controller');
let validate = require('../validate/user.validate');

let router = express.Router();

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", validate.postCreate, controller.postCreate);

module.exports = router;