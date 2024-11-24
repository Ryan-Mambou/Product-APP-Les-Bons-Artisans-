import httpService from "./httpService";
import { getDecodedToken } from "../utils/token";

export const getAllProducts = async () => {
  const res = await httpService.get("/product");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await httpService.get(`/product/${id}`);
  return res.data;
};

export const createProduct = async (product) => {
  const userData = getDecodedToken();
  const res = await httpService.post("/product", {
    ...product,
    userId: userData.userId,
  });
  return res;
};

export const updateProduct = async (id, product) => {
  return await httpService.put(`/product/${id}`, product);
};

export const deleteProduct = async (product) => {
  const res = await httpService.delete(`/product/${product._id}`, {
    data: {
      userId: product.userId,
    },
  });
  return res;
  // return await httpService.delete(`/product/${id}`);
};
