// // Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
//     // Ingrese base: 20
//     // Ingrese altura: 10
//     // El área del triángulo es: 100
//         alert("Calculando el área de un triángulo")
//         let base = prompt("Ingresar la base del triángulo: ")
//         let altura = prompt("Ingresar la altura del triángulo: ")
//         let area = 0.5 * base * altura
//         document.write("El ÁREA del triángulo es: "+ area)

// // Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
//     // Ingrese lado a: 5
//     // Ingrese lado b: 4
//     // Ingrese lado c: 3
//     // El perimetro del triangulo es: 12
//         alert("Calculando el PERÍMETRO de un triángulo")
//         let ladoA = parseInt(prompt("ingresar lado a"))
//         let ladoB = parseInt(prompt("ingresar lado b"))
//         let ladoC = parseInt(prompt("ingresar lado c"))
//         let perimetro = ladoA+ladoB+ladoC
//         document.write("<br>")
//         document.write("El perímetro del triángulo es: "+ perimetro)

// // Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
//     alert("ÁREA del rectángulo")
//     let largo = parseInt(prompt("Ingresar largo"))
//     let ancho= parseInt(prompt("Ingresar ancho"))
//     let perimetroRectangulo = (2*(largo+ancho))
//     document.write("<br>")
//     document.write("El perímetro del RECTÄNGULO es: "+ perimetroRectangulo)

// // Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
//     alert("RADIO Y ÁREA CÏRCULO")
//     let radio = parseFloat(prompt("Ingresar el radio"))
//     let areaCir = (3.14 * radio * radio)
//     let circunferenciaCir = (2*3.14*radio)
//     document.write("<br>")
//     document.write("El radio del círculo es: "+ parseFloat(areaCir))
//     document.write("<br>")
//     document.write("El circunferencia del círculo es: "+ parseFloat(circunferenciaCir))
    
// // Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
//     let interX = 5
//     let interY = (2*interX)-2
//     console.log("Pendiente es: "+interY)

// // La pendiente es m = (y2-y1)/(x2-x1).
// // Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
//     console.log("La pendiente es: " +((2-2)/(6-10)))

// // Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
//     let valorX = 3
//     let valorY = (valorX*2)+(6*valorX)+9
//     console.log("El valor de Y es: "+valorY)

// // Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
//     // Ingrese horas: 40
//     // Introduce la tarifa por hora: 28
//     // Su ganancia semanal es 1120
//         let ingresoHoras = parseInt(prompt("Ingrese horas trabajadas: "))
//         let tarifaHora =  parseInt(prompt("Inrese la tarifa por hora: "))
//         console.log("Su ganancia semanale: "+ingresoHoras*tarifa)

// Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
    let ingreseNombre =  prompt("Ingresar su nombre")
    if(ingreseNombre.length > 7){
        console.log("Su nombre es largo")
    } else {
        console.log("Su nombre es corto")
    }

// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
    //let firstName = "Asabeneh";
    //let lastName = "Yetayeh";
    //Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
        let primerNombre = prompt("Nombre")
        let segundoNombre= prompt("Segundo nombre")
        if(primerNombre.length > segundoNombre.length){
            console.log(`Tu primer nombre ${primerNombre}, es más largo que tu segundo nombre ${segundoNombre}`)
        } else  {
            console.log(`Tu segundo nombre ${segundoNombre}, es más largo que tu primer nombre ${primerNombre}`)
        }

