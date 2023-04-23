 //   Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
        let desafio = "30 días de JavaScript"

 //   Imprima la cadena en la consola del navegador usando console.log()
        console.log(desafio)

 //   Imprima la longitud de la cadena en la consola del navegador usando console.log()
        console.log("La longitud es: "+ desafio.length)

 //   Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
        console.log("En mayúsculas: "+ desafio.toLocaleUpperCase())

 //   Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
        console.log("En minúsculas: "+ desafio.toLowerCase())

 //   Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
        console.log("La primera palabra de la cadena es: "+ desafio.substr(0,2))

 //   Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
        console.log("La frase cortada: "+ desafio.substr(3,18))

 //   Verifique si la cadena contiene una palabra Script usando el método includes()
        console.log("¿La cadena contiene la palabra Script? "+ desafio.includes("Script"))

 //   Divide la cadena en un array usando el método split()
        console.log("Uso de método split: "+ desafio.split(" "))

 //   Divida la cadena 30 días de JavaScript en el espacio usando el método split()
        console.log("Uso de método split: "+ desafio.split(""))

 //   'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
        let companias = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
        console.log("Matriz de compañias: "+ companias.split(","))

 //   Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
        console.log("Cámbio de lenguaje: "+ desafio.replace("JavaScript", "Python"))

 //   ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
        console.log("El carácter en el índice 15 es: "+ desafio.charAt(15))

 //   ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
        console.log("El código ASSCI del carácter J es: "+ desafio.charCodeAt(11))

 //   Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
        console.log(`La primera aparición (índice) de "a" es: `+desafio.indexOf("a"))

 //   Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
        console.log(`La última aparición (índice) de "a" es: `+desafio.lastIndexOf("a"))

 //   Usa indexOf para encontrar la posición de la primera aparición de la palabra "porque" en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
        let frase = 'No puedes terminar una oración con porque porque porque es una conjunción'
        console.log(`Primera posición de la palabra "porque" es: `+ frase.indexOf("porque"))

 //   Usa lastIndexOf para encontrar la posición de la última aparición de la palabra "porque" en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
        console.log(`La última posición de la palabra "porque" es: `+ frase.lastIndexOf("porque"))

 //   Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
        console.log(`Primera posición de la palabra "porque" usando BUSCAR es: `+ frase.search("porque"))

 //   Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
        console.log("Eliminando espacio en blanco con trim: "+ desafio.trim(" "))

 //   Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
        console.log(`¿La primera palabra es "30"? : `+ desafio.startsWith("30"))

 //   Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
        console.log(`¿La última palabra es "JavaScript"? : `+ desafio.endsWith("JavaScript"))

 //   Usa el método match() para encontrar todos los "a" en 30 días de JavaScript
        console.log(`Uso de match() para encontrar todos los "a" : `+ desafio.match(/a/gi))

 //   Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
        let frase1 = '30 días de'
        let frase2 = " JavaScript, perros"
        console.log("Concatenar frase1 y frase2: "+ frase1.concat(frase2))

 //   Use el método repeat() para imprimir 30 días de JavaScript 2 veces
        console.log("Repitiendo 2 veces la cadena: "+ desafio.repeat(2))