/** Desafio Multiplicación */
/** Variables */
const MIN_NUM = 1;
const MAX_NUM = 20;
const BASE_NUM_FACT = 1;
const ZERO_NUM_FACT = 0;

/** Solicitud de Números */
const numero = window.prompt('Ingrese N°, para obtener su tabla de multiplicacion y factorial');

/** Parseo y Validacion */
const numero_parseado = parseInt(numero);
if (typeof numero_parseado === 'NaN' || isNaN(numero_parseado) || numero_parseado < MIN_NUM || numero_parseado > MAX_NUM) {
    window.alert('Porfavor, Ingrese N° y este debe ser mayor o igual a 1 y menor o igual a 20.');
    throw new Error("Porfavor, Ingrese N° y este debe ser mayor o igual a 1 y menor o igual a 20. Stop script!!");
}

/** Funciones */
const factorial = function (numero_factorial) {
    if (numero_factorial == ZERO_NUM_FACT) {
        return BASE_NUM_FACT;
    } else {
        return factorial(numero_factorial - BASE_NUM_FACT) * numero_factorial;
    }
}

const multiplicar = function (factor, coeficiente) {
    return factor * coeficiente;
}

/** Resultado e Iteracion */
let mensaje = '';

for (let indexMulti = 1; indexMulti <= numero; indexMulti++) {
    mensaje += `${indexMulti} x ${numero} = ${multiplicar(indexMulti, numero)}\n`;
}
for (let indexFact = 1; indexFact <= numero; indexFact++) {
    mensaje += `Factorial de ${indexFact} es  ${factorial(indexFact)}\n`;
}

/** Info */
window.console.log(mensaje);
window.alert(mensaje);