// let number = prompt("Ingrese un número", "El número va aquí");
// console.log(number);

// const agree = confirm("¿Segur@ de ingresar a este mundo de la programación?");
// console.log(agree)

// Crear un objeto de tiempo
    const now = new Date()
    console.log(now)

// Crear un objeto de tiempo
    console.log(now.getFullYear());

// Obtener mes
    console.log(now.getMonth())

// Obtener fecha
    console.log(now.getDate())

// Obtener día
    console.log(now.getDay())

// Obtener horas
    console.log(now.getHours())

// Obtener minutos
    console.log(now.getMinutes())

// Obtener segundos
    console.log(now.getSeconds())

// Obtener tiempo
    // Forma 1
    console.log(now.getTime())
    // Forma 2
    const allSeconds = Date.now()
    console.log(allSeconds)

    const timeInSeconds = new Date().getTime()
    console.log(allSeconds == timeInSeconds)

const now2 = new Date();
const year = now2.getFullYear(); 
const month = now2.getMonth(); 
const date = now2.getDate();
const hours = now2.getHours();
const minutes = now2.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
