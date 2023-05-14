``
// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes: 
    //0-100, A
    //0-89, B
    //0-69, C
    //0-59, D
    //-49, F
        let puntaje = parseInt(prompt("Ingrese puntaje"));
        if ( (puntaje>=90) && (puntaje<=100) ){
            console.log("A");
        } else if ( (puntaje>=70) && (puntaje<=89) ){
            console.log("B");

        } else if ( ((puntaje>=60) && (puntaje<=69)) ){
            console.log("C");
        } else if( puntaje<=59 ){
            console.log("F")
        }

        

// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
    // Septiembre, Octubre o Noviembre, la temporada es Otoño.
    // Diciembre, Enero o Febrero, la temporada es Invierno.
    // Marzo, Abril o Mayo, la temporada es Primavera
    // Junio, Julio o Agosto, la temporada es Verano
        let mes = prompt("Ingresar el mes");
        mes = mes.toLowerCase();
        switch (mes) {
            case "septiembre":
            case "octubre":
            case "noviembre":
                console.log("La temporada es Otoño");
                break;
            case "diciembre":
            case "enero":
            case "febrero":
                console.log("La temporada es Invierno");
                break;
            case "marzo":
            case "abril":
            case "mayo":
                console.log("La temporada es Primavera");
                break;
            case "junio":
            case "julio":
            case "agosto":
                console.log("La temporada es Verano");
                break;
        
            default:
                break;
        }

// Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
    //¿Qué día es hoy? Sábado
    //El sábado es fin de semana.

    //¿Qué día es hoy? sábAdo
    //El sábado es fin de semana.

    //¿Qué día es hoy? Viernes
    //El viernes es un día laborable.

    //¿Qué día es hoy? ViErNes
    //El viernes es un día laborable.

        let diaActual = prompt("¿qué dia es hoy?")
        diaActual = diaActual.toLowerCase();

        switch (diaActual) {
            case "lunes":
            case "martes":
            case "miercoles":
            case "jueves":
            case "viernes":
                console.log(`El ${diaActual} es día laborable`)
                break;
            case "sabado":
            case "domingo":
                console.log(`El ${diaActual} es fin de semana`);
                break;
            default:
                break;
        }

