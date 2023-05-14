// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
    let edadUsuario = prompt("Ingrese su edad")

    if (edadUsuario >= 18){
        console.log("Tiene la edad suficiente para conducir")
    } else {
        console.log(`Te faltan ${18-edadUsuario} años para conducir`);
    }

// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
    let myAge = 25;
    let yourAge = prompt("Tu edad");
    if(myAge > yourAge){
        console.log(`Soy ${myAge - yourAge} mayor que tu`);
    } else {
        console.log(`Eres ${yourAge - myAge} mayor que yo`);
    }

// Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
    // Usando if else
    // operador ternario.
        const a = 4;
        const b = 3;
        // if (a>b){
        //     console.log(`${a} es mayor que ${b}`);
        // } else {
        //     console.log(`${a} es menor que ${b}`);
        // }

        (a > b) ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`);

// Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
    const numPar = prompt("Ingrese un número");
        if(numPar%2 == 0){
            console.log(`${numPar} es un número par`);
        } else {
            console.log(`${numPar} es un número impar`)
        }
