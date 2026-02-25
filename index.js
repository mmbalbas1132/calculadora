/**
 * Referencia al elemento de entrada donde se muestra la expresión o el resultado.
 * @type {HTMLInputElement}
 */
let pantalla = document.getElementById('pantalla');

/**
 * Almacena la expresión matemática actual como una cadena.
 * @type {string}
 */
let expresion = '';

/**
 * Agrega un número a la expresión actual y actualiza la pantalla.
 * @param {string} numero - El número a agregar a la expresión.
 */
function agregarNumero(numero) {
    expresion += numero;
    actualizarPantalla();
}

/**
 * Agrega un operador matemático a la expresión actual si el último carácter no es un operador.
 * @param {string} operador - El operador a agregar (+, -, *, /).
 */
function agregarOperador(operador) {
    if (expresion && !esOperador(expresion[expresion.length - 1])) {
        expresion += operador;
        actualizarPantalla();
    }
}

/**
 * Verifica si un carácter dado es un operador matemático.
 * @param {string} caracter - El carácter a verificar.
 * @returns {boolean} - `true` si el carácter es un operador, de lo contrario `false`.
 */
function esOperador(caracter) {
    return ['+', '-', '*', '/'].includes(caracter);
}

/**
 * Actualiza el valor de la pantalla con la expresión actual.
 */
function actualizarPantalla() {
    pantalla.value = expresion;
}

/**
 * Limpia la expresión actual y actualiza la pantalla.
 */
function limpiar() {
    expresion = '';
    actualizarPantalla();
}

/**
 * Elimina el último carácter de la expresión actual y actualiza la pantalla.
 */
function borrar() {
    expresion = expresion.slice(0, -1);
    actualizarPantalla();
}

/**
 * Evalúa la expresión matemática actual y muestra el resultado en la pantalla.
 * Si ocurre un error, muestra "Error" y reinicia la expresión.
 */
function calcular() {
    try {
        let resultado = eval(expresion);
        expresion = resultado.toString();
        actualizarPantalla();
    } catch (error) {
        pantalla.value = 'Error';
        expresion = '';
    }
}
