import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products`;

// Create New Product
export const createProduct = async (formData) => {
  const response = await axios.post(``, formData);
  return response.data;
};

const productService = {
  createProduct,
};

export default productService;
