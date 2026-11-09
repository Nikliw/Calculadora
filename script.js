let pantalla = document.getElementById('pantalla');
let primerNumero = 0;
let operacion = null;
let esNuevoNumero = true;

function agregarNumero(numero) {
    if (esNuevoNumero || pantalla.value === '0') {
        pantalla.value = numero;
        esNuevoNumero = false;
    } else {
        pantalla.value += numero;
    }
}

function agregarPunto() {
    if (esNuevoNumero) {
        pantalla.value = '0.';
        esNuevoNumero = false;
    } else if (!pantalla.value.includes('.')) {
        pantalla.value += '.';
    }
}

function seleccionarOperacion(op) {
    primerNumero = parseFloat(pantalla.value);
    operacion = op;
    esNuevoNumero = true;
}

function calcular() {
    if (operacion === null || esNuevoNumero) return;

    let segundoNumero = parseFloat(pantalla.value);
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '*':
            resultado = primerNumero * segundoNumero;
            break;
        case '/':
            if (segundoNumero !== 0) {
                resultado = primerNumero / segundoNumero;
            } else {
                alert("No se puede dividir por cero");
                limpiar();
                return;
            }
            break;
    }

    pantalla.value = resultado;
    operacion = null;
    esNuevoNumero = true;
}

function limpiar() {
    pantalla.value = '0';
    primerNumero = 0;
    operacion = null;
    esNuevoNumero = true;
}