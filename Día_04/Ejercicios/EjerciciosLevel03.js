// Escribe un programa que diga el número de días en un mes.
    let mes = prompt("Ingresar mes");
    mes = mes.toLowerCase();

    switch (mes) {
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            console.log(`${mes} tiene 30 días`); 
            break;
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            console.log(`${mes} tiene 31 días`); 
            break;
        case "febrero":
            console.log(`${mes} tiene 28 días`);
            console.log(`(Menos cuando es bisiesto que tiene 29 días)`);
            break;

        default:
            break;
    }

// Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

let mes2 = prompt("Ingresar mes");
    mes2 = mes2.toLowerCase();

    switch (mes2) {
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            console.log(`${mes2} tiene 30 días`); 
            break;
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            console.log(`${mes2} tiene 31 días`); 
            break;
        case "febrero":
                let anoActual = new Date();
                let ano = anoActual.getFullYear();
                
                if(ano%4 == 0 ){
                    console.log(`${mes2} tiene 29 días`);
                } else {
                    console.log(`${mes2} tiene 28 días`);
                }
            
            
            break;

        default:
            break;
    }