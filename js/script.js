/**
 * Ejercicio #1: La Calculadora
 *
 * ¿Como funciona?:
 * El usuario ingresa los números en los campos, selecciona la operación
 * y hace click en el botón "Calcular" para obtener el resultado.
 *
 * ¿Que tengo que hacer?
 * Tienes que escribir todas las funciones que consideres necesarias para
 * calcular el total de la operación.
 *
 * Considera:
 * 1. Si el usuario no completa todos los campos tienes que imprimir un
 *    mesaje de error. Ya existe la funcion que lo hace "imprimirError"
 * 2. Ya tienes variables para obtener los valores de los campos: input1,
 *    input2 y operacion. Para obtener el valor usas la propiedad "value".
 *    Por ejemplo: input1.value
 * 3. El valor de los campos de texto va a venir como un string, debes
 *    usar parseInt() para convertirlos a numeros y poder hacer operaciones
 *    matematicas. Por ejemplo parseInt(input1.value, 10)
 *
 * ¿Donde empiezo?:
 * Comiezas en la funcion "hacerOperacion". Ya está escrito el código para
 * que cuando el usuario haga click en el boton "Calcular" se llame a la
 * funcion "hacerOperacion".
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

// BOILERPLATE: NO TOCAR ESTE CODIGO
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const operacion = document.querySelector('#operacion');

function imprimirResultado(total) {
  const resultado = document.querySelector('#resultado');
  resultado.innerText = `El resultado de tu operación es: ${total}`;
}

function imprimirError(mensaje) {
  const error = document.querySelector('#error');
  error.innerText = mensaje;
}

// TERMINA EL BOILERPLATE

// COMIENZA ACA
// Creo una función por cada operación que retorne la suma, resta,
// multiplicación o división según sea el caso.
function sumar(primerDigito, segundoDigito) {
  return primerDigito + segundoDigito;
}
function restar(primerDigito, segundoDigito) {
  return primerDigito - segundoDigito;
}
function multiplicar(primerDigito, segundoDigito) {
  return primerDigito * segundoDigito;
}
function dividir(primerDigito, segundoDigito) {
  return primerDigito / segundoDigito;
}
// Esta función se encarga de evaluar si el acordeón contiene la palabra de acuerdo
// a cada operación correspondiente, paso los parámetros de los inputs para que cada función
// por aparte reciba estos valores y ejecuta la operación matemática.
function desarrolloMatematico() {
// Creo mis constantes que guardan el valor de los inputs para poder acceder a sus valores finales.
  const primerDigito = parseInt(input1.value, 10);
  const segundoDigito = parseInt(input2.value, 10);
  if (operacion.value === 'sumar') {
    imprimirResultado(sumar(primerDigito, segundoDigito));
  } else if (operacion.value === 'restar') {
    imprimirResultado(restar(primerDigito, segundoDigito));
  } else if (operacion.value === 'multiplicar') {
    imprimirResultado(multiplicar(primerDigito, segundoDigito));
  } else {
    imprimirResultado(dividir(primerDigito, segundoDigito));
  }
}
// Primero hay que evaluar si los campos están incompletos, para generar un msj
// de error de acuerdo al campo vacío. Si todo está completito entonces me dirijo a la
// función que va a realizar todo el desarrollo matemático.
function hacerOperacion() {
  if (input1.value === '') {
    imprimirError('Ingrese un número en el primer espacio');
  } else if (input2.value === '') {
    imprimirError('Ingrese un número en el segundo espacio');
  } else if (operacion.value === '') {
    imprimirError('Seleccione la operación que desea realizar (sumar, restar, multiplicar,dividir)');
  } else {
    desarrolloMatematico();
  }
}
document.querySelector('button').addEventListener('click', hacerOperacion);
