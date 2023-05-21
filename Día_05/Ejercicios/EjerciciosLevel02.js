// Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
 //let text =
 //"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
 //console.log(words);
 //console.log(words.length);
 let text =
 "I love teaching and empowering people I teach HTML CSS JS React Python.";
 const words = text.split(" ")
    console.log(words);
    console.log(words.length);

// En el siguiente carrito de compras agregue, elimine, edite artículos.
    const shoppingCart = [
        "Milk",
        "Coffee",
        "Tea", 
        "Honey"
    ];

    // Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    shoppingCart.unshift("Meat");
        console.log(shoppingCart);

    // Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    shoppingCart.push("Sugar");
        console.log(shoppingCart);

    // Elimine 'Honey' si es alérgico a la miel (honey)
    shoppingCart.splice(4,1);
        console.log(shoppingCart);

    // Modificar Tea a 'Green Tea'
    shoppingCart.splice(3,1,"Green Tea")
        console.log(shoppingCart);

// En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
        