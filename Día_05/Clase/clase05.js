// Arrays
    // Constructor de arrays
        const arr = new Array();
        console.log(arr);
    // Usando corchetes []
        const arr2= [];
        console.log(arr2);
    
// Crear un array con valores
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
    const fruits = ["banana", "orange", "mango", "lemon"];
    const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
    const animalProducts = ["milk", "meat", "butter", "yoghurt"];
    const webTechs = ["Html", "Css", "Js", "React", "Redux", "node"];
    const countries = ["Finland", "Denmark", "Sweden", "Norway", "Icela"];

// Imprimir los array y su longitud
    console.log("Numbers: "+ numbers);
    console.log("Numbers of numbers: "+ numbers.length);

    console.log("Fruits: "+ fruits);
    console.log("Numbers of fruits: "+ fruits.length);

    console.log("Vegetables:", vegetables);
    console.log("Number of vegetables:", vegetables.length);

    console.log("Animal products:", animalProducts);
    console.log("Number of animal products:", animalProducts.length);

    console.log("Web technologies:", webTechs);
    console.log("Number of web technologies:", webTechs.length);

    console.log("Countries:", countries);
    console.log("Number of countries:", countries.length);

// Array puede tener elementos de diferentes tipos de datos
    const arr3 = [
        "Asabeneh",
        250,
        true,
        { conutry: "Finland", city: "Helsinki" },
        { skills: ["HTML", "CSS", "JS", "React", "Python"] }
    ]
    console.log(arr3);

// Creando un array usando split
    let js = "JavaScript";
    const charsInJavaScript = js.split("");
        console.log(charsInJavaScript);

    let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Otra";
    const companies = companiesString.split(",");
        console.log(companies);

    let txt = "I love teaching and empowering people, I teach HTML, CSS, JS, React, Python"
    const words = txt.split(" ");
        console.log(words);

// Acceder a los elementos de un array usando el index
    // Accedemos a cada elemento en un array usando su index.
    // ["Banana", "Orange", "Mango", "Lemon"]
    //     0          1        2        3
        const fruits2 = ["Banana", "Orange", "Mango", "Lemon"];
        let firstFruit = fruits2[0];
            console.log(firstFruit);

        let lastFruit = fruits2[1];
            console.log(lastFruit);

        let lastIndex = fruits.length-1;
            lastFruit = fruits2[lastIndex];
            console.log(lastFruit);

        const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100];
            console.log(numbers2.length);
            console.log(numbers2);
            console.log(numbers[0]);
            console.log(numbers[5]);
        let lastIndex2 = numbers2.length-1;
            console.log(numbers2[lastIndex2]);
            
        const webTechs2 = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node",
            "MongoDB"
        ]

        console.log(webTechs2);
        console.log(webTechs2.length);
        console.log(webTechs2[0]);
        console.log(webTechs2[6]);

        let lastIndex3 = webTechs2.length-1;
            console.log(webTechs2[lastIndex3]);
            
// Modificar elementos de un array
        // Un array es mutable(modificable)
        const numbers3 = [1,2,3,4,5];
        numbers3[0] = 10;
        numbers3[1] = 20;
            console.log(numbers3);
            

            const countries2 = [
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
            countries2[0] = "Afghanistan";
            let lastIndex4 = countries2.length-1;
            countries2[lastIndex4] = "Korea";
              console.log(countries2);

// Métodos para manipular arrays
    // Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift.
         
    // Constructor de arrays
        const arr6= Array(); // crea un array vacío
        console.log(arr6);
    
        const eightEmptyValues = Array(8); // crea ocho valores vacíos
        console.log(eightEmptyValues); // [empty x 8]
    
    // Creando valores estáticos con fill
        const arr7 = Array();
        console.log(arr7);

        const ochoValores = Array(8).fill("x");
        console.log(ochoValores);
        
        const ocho0Valores =Array(8).fill("0");
        console.log(ocho0Valores);

        const cuatroValores = Array(4).fill("4");
        console.log(cuatroValores);
        
    // Concatenación de arrays usando concat
              const firstList = [1,2,3];
              const secondList = [4,5,6];
              const thirdList = firstList.concat(secondList);
                console.log(thirdList);

              const fruits3 = ["Banana", "Orange", "Mango", "Lemon"];
              const vegetables3 = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
              const fruits3AndVegetables3 = fruits3.concat(vegetables3);
                console.log(fruits3AndVegetables3);
                
    // Obtener la longitud de array
              const numbers4 = [1,2,3,4,5];
                console.log(numbers4.length);
    
    // Obtener el index de un elemento en un array
        // Verifica si un elemento existe en un array. Si existe, devuelve el index, de lo contrario devuelve -1
            const numbers5 = [1,2,3,4,5];
                console.log(numbers5.indexOf(5));
                console.log(numbers5.indexOf(0));
                console.log(numbers5.indexOf(1));
                console.log(numbers5.indexOf(6));
                
    // Comprobar si un elemento existe en un array
        // Comprobar elementos en una lista
              const fruits5 = ["banana", "orange", "mango", "lemon"];
              let index2 = fruits5.indexOf("banana");
                if (index2===-1) {
                    console.log("Esta fruta no existe en el array");
                } else {
                    console.log("Esta fruta existe en el array");
                    
                }
                //Usando el ternario
                index2===-1 ? console.log("Esta fruta no existe en el array") : console.log("Esta fruta existe en el array");

    // Obtener el último index de un elemento en un array
        // lastIndexOf
                const numbers6 = [1,2,3,4,5,3,1,2];
                console.log(numbers6.lastIndexOf(2));
                console.log(numbers6.lastIndexOf(0));
                console.log(numbers6.lastIndexOf(1));
                console.log(numbers6.lastIndexOf(4));
                console.log(numbers6.lastIndexOf(6));

    // Includes: para verificar si un elemento existe en un array. Si existe, devuelve true, de lo contrario devuelve false.
                const numbers7 = [1,2,3,4,5];
                console.log(numbers7.includes(5));
                console.log(numbers7.includes(0));
                console.log(numbers7.includes(1));
                console.log(numbers7.includes(6));

const webTechs3 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
    console.log(webTechs3.includes("Node"));
    console.log(webTechs3.includes("C"));

// Convertir array a string
    // toString: Convierte un array a string
        const numbers8 = [1,2,3,4,5];
            console.log(numbers.toString());

        const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
            console.log(names.toString());

// Unir elementos de un array
    // join: Se usa para unir los elementos del array
        const numbers9 = [1,2,3,4,5];
            console.log(numbers9.join());

        const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
            console.log(names2.join());
            console.log(names2.join(""));
            console.log(names2.join(" "));
            console.log(names2.join(", "));
            console.log(names2.join("# "));

// Cortar elementos de un array
    // Slice: Para cortar varios elementos en el rango.
        const num = [1,2,3,4,5];
            console.log(num.slice());
            console.log(num.slice(0));
            console.log(num.slice(0, num.length));
            console.log(num.slice(1,4));
        
// Método splice en un array
    // Splice: Toma tres parámetros: posición incial, número de elementos a eliminar y cantidad de elementos que se agregarán.
        const numb = [1,2,3,4,5];
            numb.splice();
            console.log(numb);
            
// Agrega elementos a un array usando push
 // agrega elementos al final
    const arr9 = ["Item1", "Item2", "Item3"];
    arr9.push("New item");
        console.log("Arreglo modificado: "+arr9);
        
// Eliminar el último elemento final (pop)
    const numero = [1,2,3,4,5];
    numero.pop();
        console.log(numero);
    
// Eliminar elemento al principio (shift)
    const numero1 = [1,2,3,4,5];
    numero1.shift();
        console.log(numero1);

// Añade un elemento al inicio (unshift)
    const num1 = [1,2,3,4,5];
    num1.unshift(0);
        console.log(num1);

// Invertir orden de un array (reverse)
    const n1 = [5,6,7,8,9];
    n1.reverse();
        console.log(n1);

// Ordenar elementos en un array (sort)
    const tecno = ["HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",];
    tecno.sort();
        console.log(tecno);
    tecno.reverse();
        console.log(tecno);
        
// Array de arrays
    const primerNum = [1,2,3];
    const segunNum = [4,5,6];

    const arregloDEArreglo = [
        [1,2,3],
        [7,8,9]
    ]
        console.log(arregloDEArreglo[0]);

    const front = ["Html", "Css", "Html"];
    const back = ["Java", "Python", "C++"];
    const full = [front, back];
        console.log(full);
        console.log(full.length);
        console.log(full[0]);
        console.log(full[1]);

        
        
        

        
        
    

            
            
        
    
    
     
            

        


    
    