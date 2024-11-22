const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.findAll);
router.get("/:id", productController.findProduct);
router.post("/", productController.create);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
