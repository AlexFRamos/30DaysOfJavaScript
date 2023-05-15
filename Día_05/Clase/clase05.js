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
     
            

        


    
    