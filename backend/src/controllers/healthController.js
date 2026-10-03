import { getHealth } from '../services/healthService.js';

export function healthController(_request, response) {
  response.json(getHealth());
}