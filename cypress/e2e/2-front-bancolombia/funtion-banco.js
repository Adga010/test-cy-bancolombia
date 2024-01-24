// funciones.js
export function generarNumeroAleatorio() {
    const montoMinimo = 500000;
    const montoMaximo = 10000000000;
    return Math.floor(Math.random() * (montoMaximo - montoMinimo + 1)) + montoMinimo;
}
export function generarNumeroAleatorioMenor() {
    const montoMinimo = 1;
    const montoMaximo = 499999;
    return Math.floor(Math.random() * (montoMaximo - montoMinimo + 1)) + montoMinimo;
}

export function generarNumeroAleatorioMayor() {
    const montoMinimo = 10000000001;
    const montoMaximo = 90000000000;
    return Math.floor(Math.random() * (montoMaximo - montoMinimo + 1)) + montoMinimo;
}

export function generarDiasMenor() {
    const minimoDias = 1; // Comienza en 1 porque 1 * 30 = 30 (el mínimo)
    const maximoDias = 29; // 60 porque 60 * 30 = 1800 (el máximo)
    return Math.floor(Math.random() * (maximoDias - minimoDias + 1) + minimoDias);
}

export function generarDiasMayor() {
    const minimoDias = 1801; // Comienza en 1 porque 1 * 30 = 30 (el mínimo)
    const maximoDias = 5801; // 60 porque 60 * 30 = 1800 (el máximo)
    return Math.floor(Math.random() * (maximoDias - minimoDias + 1) + minimoDias);
}

export function generarDiasAleatorios() {
    const minimoDias = 1; // Comienza en 1 porque 1 * 30 = 30 (el mínimo)
    const maximoDias = 60; // 60 porque 60 * 30 = 1800 (el máximo)
    return Math.floor(Math.random() * (maximoDias - minimoDias + 1) + minimoDias) * 30;
}
