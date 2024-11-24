const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const productController = require("../controllers/product");

router.get("/", productController.findAll);
router.get("/:id", productController.findProduct);
router.post("/", auth, productController.createProduct);
router.put("/:id", auth, productController.updateProduct);
router.delete("/:id", auth, productController.deleteProduct);

module.exports = router;
