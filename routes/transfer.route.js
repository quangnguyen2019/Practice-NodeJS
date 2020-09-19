let express = require('express');

let controller = require("../controllers/transfer.controller");

let router = express.Router();

router.get("/create", controller.create);

router.post('/create', controller.postCreate);

module.exports = router;