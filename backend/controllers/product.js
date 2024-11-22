const Product = require("../models/product");

module.exports = {
  findAll: async (req, res) => {
    Product.find()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  findProduct: (req, res) => {
    const { id } = req.params;
    Product.findById(id)
      .then((product) => {
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  create: (req, res) => {
    const { name, price, type, warranty_years, available, rating } = req.body;
    const product = new Product({
      name,
      price,
      type,
      warranty_years,
      available,
      rating,
    });
    product
      .save()
      .then((product) => res.status(201).json(product))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  updateProduct: async (req, res) => {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Cannot find book to update" });
    }

    Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    })
      .then((product) => res.status(200).json(product))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  deleteProduct: async (req, res) => {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Cannot find book to delete" });
    }

    Product.findByIdAndDelete(productId)
      .then(() => {
        res.status(200).json({ message: "Product deleted successfully" });
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  },
};
