import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // 10 usuarios virtuales
    duration: '1m', // Duración de la prueba: 1 minuto
};

export default function () {
    let response = http.get('https://reqres.in/api/users?page=2');

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 200ms': (r) => r.timings.duration < 200
    });

    sleep(1); // Espera de 1 segundo entre peticiones
}
