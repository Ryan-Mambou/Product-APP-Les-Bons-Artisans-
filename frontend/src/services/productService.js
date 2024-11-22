import httpService from "./httpService";

export const getAllProducts = async () => {
  const products = await httpService.get("/product");
  return products;
};

export const getProduct = async (id) => {
  const product = await httpService.get(`/product/${id}`);
  return product;
};

export const createProduct = async (product) => {
  const newProduct = await httpService.post("/product", product);
  return newProduct;
};

export const updateProduct = async (id, product) => {
  return await httpService.put(`/product/${id}`, product);
};

export const deleteProduct = async (id) => {
  return await httpService.delete(`/product/${id}`);
};
