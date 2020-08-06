let express = require('express');

let controller = require('../controllers/user.controller');

let router = express.Router();

router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create", controller.postCreate);

module.exports = router;