// El siguiente es un array de 10 edades de estudiantes:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Ordene el array y encuentre la edad mínima y máxima
    const ordenado = ages.sort()
        console.log(ordenado);

    const mayor  =  Math.max(...ordenado);
        console.log("Mayor: "+mayor);
    const menor  =  Math.min(...ordenado);
        console.log("Menor: "+menor);
        
// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
    const medio = ordenado.length/2;
        console.log(ordenado.length);
        console.log(medio);
    let obtener = ordenado[medio]
        console.log(obtener);
        console.log("La edad media es: "+ obtener/2);
        
// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
    const longitud = ordenado.length
    suma = 
        ordenado[0]+
        ordenado[1]+
        ordenado[2]+
        ordenado[3]+
        ordenado[4]+
        ordenado[5]+
        ordenado[6]+
        ordenado[7]+
        ordenado[8]+
        ordenado[9];
    const promedio = suma/longitud;
        console.log(suma);
        console.log(promedio);
        
// Encuentre el rango de las edades (max menos min)
    const rango = mayor - menor;
        console.log("El rango es: "+rango);
        
// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
    const val1 = menor - promedio;
     console.log(val1);
     console.log("Usando abs() " +Math.abs(val1));
    const val2 = mayor - promedio;
     console.log(val1);
     console.log("Usando abs() " +Math.abs(val2));
     
// 1.Cortar los diez primeros países de la array de países
let countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  const cortar = countries.splice(0,10);
    console.log(cortar);
    
// Encuentre el país o países de en medio en el array de países

  let med = countries.length;
    console.log(med);
  let nuevo = countries[5]
    console.log(nuevo);
    
// Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.

  const tamanoArreglo = countries.length;
    if (tamanoArreglo % 2 == 0){
        const primerArreglo = countries.splice(0,4)
        const segundoArreglo = countries.splice(5,9);
    } else {

    }
  