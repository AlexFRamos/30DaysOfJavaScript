let edad = 35;
const gravedad = 9.81;
let masa = 72;
const pi = 3.14;

const bodytemp = 37;

console.log(edad, gravedad, masa, pi, bodytemp);

// Objeto matemático
const PI = Math.PI;
console.log("Valor de PI: "+ PI);
console.log("Redondeo al más cercano: "+ Math.round(PI));
console.log("Redondeo superior: "+ Math.round(9.81));
console.log("Redondeo hacia abajo: "+ Math.floor(PI));
console.log("Redondeo hacia arriba: "+ Math.ceil(PI));
console.log("Devuelve valor mínimo: "+ Math.min(-5, 3, 20, 4, 5, 10));
console.log("Devuelve valor máximo: "+ Math.max(-5, 3, 20, 4, 5, 10));
console.log("Aleatorio entre (0 y 0.999999): "+ Math.random());
console.log("Aleatorio entre (1 y 10): "+ Math.floor( Math.random()*11 ));
console.log("Valor absoluto: "+ Math.abs( -10 ));
console.log("Raíz cuadrada: "+ Math.sqrt( 100 ));
console.log("Raíz cuadrada: "+ Math.sqrt( 2 ));
console.log("Poder: "+ Math.pow( 3,2 ));
console.log("Poder: "+ Math.E);


// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
console.log(Math.LN2);
console.log(Math.LN10);

// Devuelve el logaritmo natural de 2 y 10 respectivamente
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometría
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);


//Cadenas literales largas

/* Una cadena puede ser un colo carácter, un párrafl o una página.
Si la longitud de la cadena es demasiado grande, no cabe en una línea. Podemos usar el carácter de barra invertida (\) al final de cada línea para indicar que la cadena continuará en la línea siguiente. Ejemplo: */

const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);

/* Secuencias de escape en cadenas

En JavaScript y otros lenguajes de programación \ seguido de algunos caracteres es una secuencia de escape. Veamos los caracteres de escape más comunes: */

    /* -\n: nueva linea

    \t: Tabulador, significa 8 espacios
    \\: barra invertida
    \': Una frase (')
    \": comillas dobles (") */

//Métodos de cadena

let js = "Hola Mundo Cruel";
console.log("Longitud de cadena: " + js +": "+js.length)

//toUperCase()
//toLowerCase()

//substr()
//Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir

let string = "JavaScript"
let subtraccion = string.substr(4,6) 
console.log("Metodo substr: "+subtraccion)

// substring(): Toma dos argumentos, el índice inicial
// y el índice final, pero no incluye el carácter
// en el índice final.

let string2 = "JavaScript";

console.log(string2.substring(0, 4));
console.log(string2.substring(4, 10));
console.log(string2.substring(4));

// split(): El método split divide
// una cadena en un lugar específico.

let string3 = "30 Days Of JavaScript";

console.log(string3.split());
console.log(string3.split(" "));

// includes(): Toma un argumento de subcadena y verifica
// si existe un argumento de subcadena en la cadena.
// includes() devuelve un valor booleano. 
// Si existe una subcadena en una cadena,
// devuelve verdadero; de lo contrario, devuelve falso.

let string4 = "30 Days Of JavaScript";

console.log(string4.includes("Days")); // verdadero
console.log(string4.includes("days")); // falso: ¡se distingue entre mayúsculas y minúsculas!
console.log(string4.includes("Script")); // verdadero
console.log(string4.includes("script")); // falso
console.log(string4.includes("java")); // falso
console.log(string4.includes("Java")); // verdadero

// replace(): toma como parámetro la 
// subcadena antigua y una nueva subcadena.

// string.replace(uno,otro);

let string5 = "30 Dasy of JavaScript"
console.log(string5.replace("JavaScript", "Python"));
