import axios from 'axios';
import { API_BASE_URL } from '../../env.json';

const api = axios.create({
  baseURL: 'https://rsxp.rocketseat.com.br/api',
});

export default api;
