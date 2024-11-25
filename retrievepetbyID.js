import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  // 10 VUs durante 1 minuto
    { duration: '3m', target: 50 }, // Incrementar a 50 VUs
    { duration: '1m', target: 0 },  // Disminuir a 0 VUs
  ],
};

export default function () {
  let petId = Math.floor(Math.random() * 100000); // Genera un ID aleatorio
  let res = http.get(`http://localhost:8080/api/v3/pet/${petId}`);
  
  check(res, {
    'Status is 200': (r) => r.status === 200 || r.status === 404, // Consideramos 404 válido para IDs no existentes
    'Response time < 100ms': (r) => r.timings.duration < 100,
  });

  sleep(1); // Espera entre solicitudes
}
