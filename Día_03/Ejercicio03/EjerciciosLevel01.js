// Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

const firstName = "Fernando";
const lastName = "Jiménez";
const country = "Ecuador";
const city = "quito";
const age = 28;
const isMarried = false;

const now = new Date();
const year = now.getFullYear(); 

console.log(
    `
    ${firstName} : ${typeof(firstName)}
    ${lastName} : ${typeof(lastName)}
    ${country} : ${typeof(country)}
    ${city} : ${typeof(city)}
    ${age} : ${typeof(age)}
    ${isMarried} : ${typeof(isMarried)}
    ${now} : ${typeof(now)}
    ${year} : ${typeof(year)}

    `
)

// Verifique si typeof '10' es igual a 10
console.log(
    `
    ${typeof("10")} == ${typeof(10)}
    ${typeof("10") == typeof(10)}
    `    
)

// Verifique si parseInt('9.8') es igual a 10
console.log(
    `
    ${typeof("9.8")} == ${typeof(10)}
    ${typeof("9.8") == typeof(10)}
    `    
)

// Verifique cualquier valor booleano true o false.

    //Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
    let soltero = true;
    let eresProgramador = true;
    let eresJoven = true;
    let aprendes =  true;
    let eresPositivo = true;

    //Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
    let mayor = 3>6;
    let menor = 6<2;
    let ocho = ("8" == 8);
    let hoyEsViernes = false;
    let uno = false;

// Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    
    // 4 > 3 --true
    // 4 >= 3 --true
    // 4 < 3  --false
    // 4 <= 3  --false
    // 4 == 4  --true
    // 4 === 4  --true
    // 4 != 4  --false
    // 4 !== 4  --false
    // 4 != '4'  --false
    // 4 == '4'  --false
    // 4 === '4'  --false
        let comprobacion = (4 !== 4)
        console.log(comprobacion)

    // Encuentre la longitud de Python y jargon y haga  una declaración de comparación falsa.
        let longitud1 = "Python"
        let longitud2 = "jargon"
        console.log(longitud1 == longitud2)

// Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    // 4 > 3 && 10 < 12
    //   V         V = V
    // 4 > 3 && 10 > 12
    //   V         F = F
    // 4 > 3 || 10 < 12
    //   V         V = V
    // 4 > 3 || 10 > 12
    //   V         F = V
    // !(4 > 3)
    //     V         = F
    // !(4 < 3)
    //     F         = V
    // !(false)
    //     V
    // !(4 > 3 && 10 < 12)
    //     V         V = F
    // !(4 > 3 && 10 > 12)
    //     V         F = V
    // !(4 === '4')
    //      F          = V
    // No hay 'on' tanto en dragon como en python
    //      F

// Utilice el objeto Date para realizar las siguientes actividades
    let tiempo = new Date();

    // ¿Qué año es hoy?
        let ano = tiempo.getFullYear();
        console.log("El año es:"+ ano)

    // ¿Qué mes es hoy con un número?
        let mes =  tiempo.getMonth();
        console.log("El mes es:"+ mes)

    // ¿Qué fecha es hoy?
        console.log("La fecha de hoy es: "+ tiempo)

    // ¿Qué día es hoy con un número?
        let dia = tiempo.getDay();

    // ¿Cuál es la hora actual?
        let hora = tiempo.getHours();
    // ¿Cuántos minutos hay actualmente?
        let minutos = tiempo.getMinutes();
    // Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
        let segundos = tiempo.getSeconds();
        





