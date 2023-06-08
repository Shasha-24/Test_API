exports.getProducts = (req, res) => {
  res.status(200).json({
    products: [
      {
        name: "banana",
        price: 1,
      },
      {
        name: "apple pie",
        price: 10,
      },
      {
        name: "brownie",
        price: "5",
      },
    ],
  });
};

const Product = require("../models/product");

exports.createProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  const product = new Product({
    name: name,
    price: price,
  });

  const Product = require("../models/product");

  exports.getProducts = (req, res) => {
    Product.find()
      .then((products) => {
        res.status(200).json({ products });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "Erreur prendant la récupération des produits" });
      });
  };

  product
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Product created successfully",
        product: result,
      });
    })
    .catch((error) => {
      console.error("Error creating product:", error);
      res.status(500).json({
        error: error,
      });
    });
};

exports.getById = (req, res, next) => {
  const postId = req.params.id;
  Post.findById(id)
    .then((post) => {

      res.status(200).json({
        message: "Post found!",
        post: post,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


