// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_06_Bucles/dia_06_bucles.md

// Bucle for
    for (let i = 0; i <= 5; i++) {
    console.log(i);
    } // 0 1 2 3 4 5

    for (let i = 0; i <= 5; i++) {
        console.log(`${i} * ${i} = ${i * i}`);
      }

// Agregar elementos a un nuevo arreglo
      const countries = ["Finland", "Sweden", "Denmark", "Norway" , "Iceland"];
      const nuevoArreglo = [];

      for (let i = 0; i < countries.length; i++) {
         nuevoArreglo.push(countries[i].toLocaleUpperCase());
      }

      console.log(nuevoArreglo)
