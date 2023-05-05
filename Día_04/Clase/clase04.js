// If
    let num = 3
    if(num>0){
        console.log(`${num} es un número positivo`)
    }

    let isRaining =  true
    if (isRaining) {
        console.log("Recuerda llevar tu impermeable.")
    }

// If else
    num = -3
    if(num>0){
        console.log(`${num} es un número positivo`)
    }else {
        console.log(`${num} es un número negativo`)
    }

    isRaining = false
    if (isRaining) {
        console.log("Recuerda llevar tu impermeable.")
    } else {
        console.log("No hay necesidad de un impermeable.")
    }

// If else if
    let a=0;
    if(a>0){
        console.log(`${a} es un número positivo`);
    } else if(a<0){
        console.log(`${a} es un número negativo`);
    } else if(a==0){
        console.log(`${a} es cero`);
    } else {
        console.log(`${a} no es un número`);   
    }

// Switch
    let weather = "cloudy"
    switch (weather) {
        case "rainy":
            console.log("Necesitas un impreameable");
            break;
        case "cloudy":
            console.log("Puede que haga frío, necesitas una chaquita");
            break;
        case "sunny":
            console.log("Sal tranquilo");
            break;
    
    
        default:
            console.log("No hay necesidad de un impermeable");
            
            break;
    }
