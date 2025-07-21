import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductById = async (id: string): Promise<any> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createProduct = async (productData: any, token: string): Promise<any> => {
  const response = await axios.post(API_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProduct = async (id: string, updatedData: any): Promise<any> => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<any> => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
