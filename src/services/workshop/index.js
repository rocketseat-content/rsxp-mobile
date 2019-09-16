import api from '../api';

export function getWorkshops() {
  return api.get('/workshops');
}

export function subscribe(id) {
  return api.post(`/workshops/${id}/subscriptions`);
}
