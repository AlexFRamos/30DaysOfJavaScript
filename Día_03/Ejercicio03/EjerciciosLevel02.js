// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
    // Ingrese base: 20
    // Ingrese altura: 10
    // El área del triángulo es: 100
        alert("Calculando el área de un triángulo")
        let base = prompt("Ingresar la base del triángulo: ")
        let altura = prompt("Ingresar la altura del triángulo: ")
        let area = 0.5 * base * altura
        document.write("El ÁREA del triángulo es: "+ area)

// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
    // Ingrese lado a: 5
    // Ingrese lado b: 4
    // Ingrese lado c: 3
    // El perimetro del triangulo es: 12
        alert("Calculando el PERÍMETRO de un triángulo")
        let ladoA = parseInt(prompt("ingresar lado a"))
        let ladoB = parseInt(prompt("ingresar lado b"))
        let ladoC = parseInt(prompt("ingresar lado c"))
        let perimetro = ladoA+ladoB+ladoC
        document.write("<br>")
        document.write("El perímetro del triángulo es: "+ perimetro)

// Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
    alert("ÁREA del rectángulo")
    let largo = parseInt(prompt("Ingresar largo"))
    let ancho= parseInt(prompt("Ingresar ancho"))
    let perimetroRectangulo = (2*(largo+ancho))
    document.write("<br>")
    document.write("El perímetro del RECTÄNGULO es: "+ perimetroRectangulo)

// Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
    alert("RADIO Y ÁREA CÏRCULO")
    let radio = parseFloat(prompt("Ingresar el radio"))
    let areaCir = (3.14 * radio * radio)
    let circunferenciaCir = (2*3.14*radio)
    document.write("<br>")
    document.write("El radio del círculo es: "+ parseFloat(areaCir))
    document.write("<br>")
    document.write("El circunferencia del círculo es: "+ parseFloat(circunferenciaCir))
    