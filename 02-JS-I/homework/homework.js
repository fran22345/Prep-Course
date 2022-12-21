// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "fran";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

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
  // "Return" la string provista: str
  // Tu código:
  return  str;
}

function suma(x, letra) {
  // "x" e "letra" son números
  // Suma "x" e "letra" juntos letra devuelve el valor
  // Tu código:
  return x + letra;
}

function resta(x, letra) {
  // Resta "letra" de "x" letra devuelve el valor
  // Tu código:
  return x - letra;
}

function multiplica(x, letra) {
  // Multiplica "x" por "letra" letra devuelve el valor
  // Tu código:
  return x * letra;
}

function divide(x, letra) {
  // Divide "x" entre "letra" letra devuelve el valor
  // Tu código:
  return x / letra;
}

function sonIguales(x, letra) {
  // Devuelve "true" si "x" e "letra" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === letra) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var a = str1.length;
  var b = str2.length;
  if(a === b) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, letra) {
  // Obten el resto de la división de "x" entre "letra"
  // Tu código:
  var a = x%letra;
  return a;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var a = num % 2
  if(a === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var a = num % 2
  if(a != 0) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let a = Math.pow(num, 2)
  return a;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let a = Math.pow(num, 3)
  return a;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let a = Math.pow(num, exponent)
  return a;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo letra devuélvelo
  // Tu código:
  let a = Math.round(num);
  return a;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) letra devuélvelo
  // Tu código:
  var a = Math.ceil(num);
  return a;
}

function numeroRandom() {
  //Generar un número al azar entre 0 letra 1 letra devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo"
  } else if (numero < 0){
    return "Es negativo"
  } else {
    return false
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" letra devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" letra "apellido" combinados en una string letra separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre +" "+ apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" letra concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}!`;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura letra ancho
  // Tu código:
  return alto * ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado letra retorne su perímetro.
  //Escribe tu código aquí
  return lado*4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura)/2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros letra calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
    if (letra.length != 1){
      return "Dato incorrecto"
    } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
      return "Es vocal"
    } else {
      return "Dato incorrecto"
    }
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
