// Usando console.log() imprima la siguiente declaración: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// Usando console.log() imprima la siguiente cita de la Madre Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
    let tipo = "10" // es un string
    tipo = Number(tipo) // cambio a número
    console.log(typeof(tipo))

// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
    let decimal = 9.8
    let entero = 10
    decimal = parseInt(decimal)
    console.log(typeof(decimal))
    console.log(decimal)

// Verifique si 'on' se encuentra tanto en Python como en la jerga.
    let jerga = "Python"
    console.log(`Encontrando "on" en la jerga: `+ jerga.includes("on"))

// Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
    let oracion = "Espero que este curso no esté lleno de jerga."
    console.log(`Encontrando "jargon" en la oración: `+ jerga.includes("jargon"))

// Genere un número aleatorio entre 0 y 100 inclusive.
    console.log(`Número aleatorio 0-100 : `+ parseInt(Math.random()*101))

// Genere un número aleatorio entre 50 y 100 inclusive.
    console.log(`Número aleatorio 50-100 : `+ Math.floor(Math.random()*(101 - 49 + 1) + 49) )

// Genere un número aleatorio entre 0 y 255 inclusive.
    console.log("Número aleatorio entre 0-255 : "+ Math.floor( Math.random()*256 ))

// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
    let cadena = "JavaScript"
    let cadena2 = Math.floor( Math.random()* ( (cadena.length)+1 ) )
    console.log(`Cadena : ${ cadena }, Aleatorio : ${ (cadena2)+1 }, Letra : ${ cadena.charAt(cadena2) }`)

// Use console.log() y caracteres de escape para imprimir el siguiente patrón.
    console.log("*** Impresión de patrón con carácteres de escape ***")
    console.log(`1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125`)
    console.log("*** *** *** *** *** ***  *** *** *** *** *** *** *** ")

// Usa substr para separar la frase "porque porque porque" de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
    let oracionFrase = "No puedes terminar una oración con porque porque porque es una conjunción" 
    console.log("Frase separada es: "+ oracionFrase.substr(35, 20))