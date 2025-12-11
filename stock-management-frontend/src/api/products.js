import axios from "axios";

//const api = "http://localhost:5000/api/products";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products", // proxy in package.json forwards to backend
});

export const fetchProducts = () => API.get("/");
export const fetchProduct = (id) => API.get(`/${id}`);
export const createProduct = (data) => API.post("/", data);
export const updateProduct = (id, data) => API.put(`/${id}`, data);
export const deleteProduct = (id) => API.delete(`/${id}`);
export const searchProducts = (name) => API.get(`/search?name=${name}`);
