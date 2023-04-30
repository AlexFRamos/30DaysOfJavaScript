// Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
    // YYY-MM-DD HH:mm eg. 20120-01-02 07:05
        let now2 = new  Date();
        let anoActual = now2.getFullYear();
        let mesActual = now2.getMonth();
        let diaActual = now2.getDay();
        let horaActual = now2.getHours();
        let minActual = now2.getMinutes();
            console.log(`${anoActual}-${mesActual}-${diaActual} ${horaActual}:${minActual}`);
