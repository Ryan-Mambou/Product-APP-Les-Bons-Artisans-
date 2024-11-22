const client = require("../database");
const db = client.db("productDB");
const collection = db.collection("products");

module.exports = {
  findAll: async (req, res) => {
    try {
      const products = await collection.find().toArray();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  findProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await collection.findOne({ _id: id });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, type, price, rating, warranty_years, available } = req.body;

      const lastProduct = await collection
        .find()
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      const nextId = lastProduct.length > 0 ? lastProduct[0]._id + 1 : 1;

      const newProduct = {
        _id: nextId,
        name,
        type,
        price,
        rating,
        warranty_years,
        available,
      };

      await collection.insertOne(newProduct);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const updateData = req.body;

      const result = await collection.findOneAndUpdate(
        { _id: id },
        { $set: updateData },
        { returnDocument: "after" }
      );

      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);

      const result = await collection.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
