const express = require("express");

const productsController = require("../controller/product");

const router = express.Router();


router.get("/", productsController.getProducts);

router.post("/", productsController.createProduct);

router.get("/product/:id", productsController.getById);



//routeur.get("/product/:id", productsController.getById)

module.exports = router


