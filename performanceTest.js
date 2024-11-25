import http from 'k6/http';
import { sleep, check } from 'k6';

// Test configuration
export let options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp-up to 50 users in 1 minute
    { duration: '5m', target: 50 }, // Sustained load for 5 minutes
    { duration: '1m', target: 0 },  // Ramp-down to 0 users
  ],
};

// Test scenario
export default function () {
  // Create a pet
  let payload = JSON.stringify({
    id: Math.floor(Math.random() * 100000),
    name: `Pet-${__ITER}`,
    photoUrls: ["http://example.com/photo"],
    status: "available",
  });

  let headers = { 'Content-Type': 'application/json' };

  let createRes = http.post('http://localhost:8080/api/v3/pet', payload, { headers });

  check(createRes, {
    'Create pet status is 200': (res) => res.status === 200,
  });

  // Get pets by status
  let getRes = http.get('http://localhost:8080/api/v3/pet/findByStatus?status=available', { headers });

  check(getRes, {
    'Get pets status is 200': (res) => res.status === 200,
    'Response time < 200ms': (res) => res.timings.duration < 200,
  });

  sleep(1); // Wait for 1 second between iterations
}
