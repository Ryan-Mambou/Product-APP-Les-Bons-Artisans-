import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAction,
  getProductsAction,
  updateProductAction,
  deleteProductAction,
  setSelectedProduct,
} from "../utils/productSlice";
import Product from "../components/product";
import { Button, Grid2, Box, Typography } from "@mui/material";
import AddProductModal from "../components/addProductModal";
import ModifyProductModal from "../components/modifyProductModal";
import DeleteProductModal from "../components/deleteProductModal";

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { products } = useSelector((state) => state.product);
  const { selectedProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const handleAddProduct = (productData) => {
    dispatch(createProductAction(productData));
  };

  const handleModifyProduct = (productData) => {
    dispatch(updateProductAction(selectedProduct._id, productData));
  };

  const handleDeleteProduct = (selectedProduct) => {
    dispatch(deleteProductAction(selectedProduct));
  };

  useEffect(() => {
    dispatch(getProductsAction());
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
        onSubmit={() => handleDeleteProduct(selectedProduct)}
      />
    </div>
  );
}

export default App;
