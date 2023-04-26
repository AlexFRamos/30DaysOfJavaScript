// 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
    let frase1 = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor y amor y el piche amor más que sincero amor"
    let patronBuscar1 = /amor/gi
    console.log(frase1.match(patronBuscar1))

// Usa match() para contar el número de todos los "porque" en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
    let frase2 = "No puedes terminar una oración con porque porque porque es una conjunción"
    let patronBuscar2 = /porque/gi
    console.log(frase2.match(patronBuscar2))

// Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).

// const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let oracion = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"

// %$@#&
let patronBuscar3 = /[%$@#&]/gi
let reemplazo = oracion.replace(patronBuscar3, "")

console.log(reemplazo)

// Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.

let datosOrigen = "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes."

console.log(datosOrigen.match(/\d+/g))
console.log("El ingreso anual es de: 30.000")