import { useState, useEffect } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./services/productService";
import Product from "./components/product";
import { Button, Grid2, Box, Typography } from "@mui/material";
import AddProductModal from "./components/addProductModal";
import ModifyProductModal from "./components/modifyProductModal";
import DeleteProductModal from "./components/deleteProductModal";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddProduct = (productData) => {
    createProduct(productData);
    getAllProducts();
  };

  const handleModifyProduct = (productData) => {
    updateProduct(productData._id, productData);
    getAllProducts();
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    getAllProducts();
  };

  const fetchProducts = async () => {
    const products = await getAllProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "3rem" }}>
          List of Products
        </Typography>
        <Button
          variant="outlined"
          sx={{ padding: "5px 10px" }}
          onClick={() => setOpenAddModal(true)}
        >
          Add Product
        </Button>
      </Box>

      <Grid2 container spacing={3} sx={{ padding: "20px" }}>
        {products?.map((product) => (
          <Product
            key={product._id}
            {...product}
            openModifyModal={() => setOpenModifyModal(true)}
            openDeleteModal={() => setOpenDeleteModal(true)}
            onSelect={() => handleSelectProduct(product)}
          />
        ))}
      </Grid2>
      <AddProductModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onSubmit={handleAddProduct}
      />
      <ModifyProductModal
        open={openModifyModal}
        onClose={() => setOpenModifyModal(false)}
        onSubmit={handleModifyProduct}
        product={selectedProduct}
      />
      <DeleteProductModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onSubmit={() => handleDeleteProduct(selectedProduct._id)}
      />
    </div>
  );
}

export default App;
