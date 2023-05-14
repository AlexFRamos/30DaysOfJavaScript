// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
    let edadUsuario = prompt("Ingrese su edad")

    if (edadUsuario >= 18){
        console.log("Tiene la edad suficiente para conducir")
    } else {
        console.log(`Te faltan ${18-edadUsuario} años para cumplir 18`);
    }



