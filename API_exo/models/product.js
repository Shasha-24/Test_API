const mongoose = require("mongoose");

//Un schema determine la structure du document en base

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
