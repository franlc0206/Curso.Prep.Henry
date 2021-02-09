// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 12;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ; 

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  var suma = x + y;
  return suma;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
  var resta = x - y;
  return resta;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  var multiplica = x * y;
  return multiplica;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  var divide = x / y ;
  return divide;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {
  if ( x == y ) {
   return true;
   }
   return false;
}

function tienenMismaLongitud(str1, str2) {
  if ( str1.length == str2.length ) {
    return true;
    }
    return false;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  if ( num < 90 ) {
    return true;
    }
    return false;
}
function mayorQueCincuenta(num) {
  if ( num > 50 ) {
    return true;
    }
    return false;
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

function obtenerResto(x, y) {
var resto = x % y;
return resto;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {
  if(num % 2 == 0) {
    return true;
  }
  return false;
}

function esImpar(num) {
  if(num % 2 == 0) {
    return false;
  }
  return true;
}

function elevarAlCuadrado(num) {
  var resultado = Math.pow(num,2);
  return resultado;
}

function elevarAlCubo(num) {
  var resultado = Math.pow(num,3);
  return resultado;
}

function elevar(num, exponent) {
  var resultado = Math.pow(num, exponent);
  return resultado;
}

function redondearNumero(num) {
 var resultado = Math.round(num);
 return resultado;  
}

function redondearHaciaArriba(num) {
  var resultado = Math.ceil(num);
  return resultado;  
}

function numeroRandom() {
  var resultado = Math.random(0,1)
  return resultado;
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  var positivo = "Es positivo"
  var negativo = "Es negativo"

  if (numero > 0 ){
    return positivo;
  } if (numero < 0){
    return negativo;
  }if (numero == 0){
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  var suma = (str + "!")
  return suma;
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var suma = (nombre + " " + apellido);
  return suma; 
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
 var suma = "Hola" + " "+ nombre + "!";
 return suma;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  var area = alto * ancho;
  return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
}


function retornarPerimetro(lado){
  var suma = lado * 4;
  return suma;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
}


function areaDelTriangulo(base, altura){
  var suma = (base * altura)/2 ;
  return suma;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  var suma = euro * 1.20;
  return suma;

  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  var vocal = "a"
  var vocal1 = "e"
  var vocal2 ="i"
  var vocal3 ="o"
  var vocal4 ="u"
  if (letra == vocal){
    return "Es vocal"
  }
  if (letra == vocal1){
    return "Es vocal"
  }
  if (letra == vocal2){
    return "Es vocal"
  }
  if (letra == vocal3){
    return "Es vocal"
  }
  if (letra == vocal4){
    return "Es vocal"
  }
if (letra.length > 1){
  return "Dato incorrecto";
}


  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
