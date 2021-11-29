import axios from "axios";

const authToken = localStorage.getItem("authtoken");

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { token: authToken },
});

export default http;
