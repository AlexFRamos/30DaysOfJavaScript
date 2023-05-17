const countries = [
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
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

// Declara un array vacío
	const arregloVacío = [];

// Declara un array con más de 5 elementos
	const cincoElementos = ["Ojos", "Nariz", "Boca", "Cejas", "Cabello"];

// Encuentra la longitud de tu array
	console.log(cincoElementos.length);

// Obtenga el primer elemento, el elemento del medio y el último elemento de un array
	console.log(cincoElementos);
	
	const pri = cincoElementos[0];
	const med = cincoElementos[2];
	const ult = cincoElementos[4];
	console.log("primero: "+pri);
	console.log("intermedio: "+med);
	console.log("último: "+ult);

// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
	const mixedDataTypes = [
		"Pedro", 
		2023, 
		[1,2,3,4], 
		"Frutas", 
		["Leche", "Pan", "Huevos", 3000],
		["a", "e", "i", "o", "u"], 
		"En el bosque de la china"
	];

		console.log("Longitud del arreglo: "+ mixedDataTypes.length);
		console.log("Arreglo: "+ mixedDataTypes);

// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
		const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    
// Imprima el array usando console.log().
  console.log(itCompanies);

// Imprima el número de empresas en el array.
  console.log(itCompanies.length);

// Imprime la primer empresa , la intermedia y la última empresa
  console.log("Primera: "+itCompanies[0]);
  console.log("Intermedia: "+itCompanies[3]);
  console.log("Ültima: "+itCompanies[6]);

// Imprime cada empresa.
  console.log(itCompanies[0]);
  console.log(itCompanies[1]);
  console.log(itCompanies[2]);
  console.log(itCompanies[3]);
  console.log(itCompanies[4]);
  console.log(itCompanies[5]);
  console.log(itCompanies[6]);

// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
  itCompanies[0] = "FACEBOOK"
  itCompanies[1] = "GOOGLE"
  itCompanies[2] = "MICROSOFT"
  itCompanies[3] = "APPLE"
  itCompanies[4] = "IBM"
  itCompanies[5] = "ORACLE"
  itCompanies[6] = "AMAZON"
    console.log(itCompanies);

// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
  const oracion = itCompanies.join(", ")
  console.log(oracion +" son grandes empresas de TI");

// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
  if (itCompanies.includes("GOOGLE")) {
    console.log("Existe la empresa");
    
  } else {
    console.log("La empresa no existe");
    
  }
  
// Filtre las empresas que tienen más de una 'o' sin el método filter()
  let arregloOO = itCompanies.filter(e => o > 2)
  console.log(arregloOO);
  
  

	
