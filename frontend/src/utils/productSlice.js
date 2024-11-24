import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";

const initialState = {
  products: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productSlice.actions;

export const getProductsAction = () => async (dispatch) => {
  const products = await getAllProducts();
  dispatch(setProducts(products));
};

export const getProductAction = (id) => async (dispatch) => {
  const product = await getProduct(id);
  dispatch(setSelectedProduct(product));
};

export const createProductAction = (product) => async (dispatch, getState) => {
  const { data: newProduct } = await createProduct(product);
  const currentProducts = getState().product.products;
  dispatch(setProducts([...currentProducts, newProduct]));
};

export const updateProductAction =
  (id, updatedProductData) => async (dispatch, getState) => {
    const { data: updatedProduct } = await updateProduct(
      id,
      updatedProductData
    );
    const currentProducts = getState().product.products;
    const updatedProducts = currentProducts.map((product) =>
      product._id === id ? updatedProduct : product
    );
    dispatch(setProducts(updatedProducts));
  };

export const deleteProductAction =
  (deletedProduct) => async (dispatch, getState) => {
    await deleteProduct(deletedProduct);
    const currentProducts = getState().product.products;
    const updatedProducts = currentProducts.filter(
      (product) => product._id !== deletedProduct._id
    );
    dispatch(setProducts(updatedProducts));
  };

export default productSlice.reducer;
