const express = require("express");

const productsController = require("../controller/product");

const router = express.Router();


router.get("/", productsController.getProducts);

router.post("/", productsController.createProduct);

router.get("/product/:id", productsController.getById);

router.get("/error", (req, res, next) => {
  const error = new Error("Une erreur s'est produite");
  next(error);
});


//routeur.get("/product/:id", productsController.getById)

module.exports = router


