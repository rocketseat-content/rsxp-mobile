import api from '../api';

export function signin(email, password) {
  return api.post('/sessions', { email, password });
}

export function resetPassword(email) {
  return api.post('/forgot', { email });
}
