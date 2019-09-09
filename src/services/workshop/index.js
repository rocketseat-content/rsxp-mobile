import api from '../api';

export function getWorkshops() {
  return api.get('/workshops');
}
