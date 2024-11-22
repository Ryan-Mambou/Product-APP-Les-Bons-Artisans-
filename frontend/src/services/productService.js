import httpService from "./httpService";

export const getAllProducts = async () => {
  const res = await httpService.get("/product");
  return res.data;
};

export const getProduct = async (id) => {
  const res = await httpService.get(`/product/${id}`);
  return res.data;
};

export const createProduct = async (product) => {
  return await httpService.post("/product", product);
};

export const updateProduct = async (id, product) => {
  return await httpService.put(`/product/${id}`, product);
};

export const deleteProduct = async (id) => {
  return await httpService.delete(`/product/${id}`);
};
