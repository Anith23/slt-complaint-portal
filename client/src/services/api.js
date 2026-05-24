import axios from "axios";

const API = axios.create({
  baseURL: "https://slt-complaint-portal.onrender.com"
});

export default API;