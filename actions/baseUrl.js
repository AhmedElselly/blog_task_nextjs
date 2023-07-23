import axios from "axios";

export const url = 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: url,
});
