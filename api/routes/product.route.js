let express = require('express');

let controller = require('../controllers/product.controller');

let router = express.Router();

router.get("/", controller.index);
router.post("/", controller.create);

module.exports = router;