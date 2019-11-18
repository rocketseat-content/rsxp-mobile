import axios from 'axios';
import { API_BASE_URL } from '../../env.json';

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
