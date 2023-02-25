//Juan Manuel Gonzalez Rodriguez
//Dibujos con "*"
//Version 0.1



//CUADRADO CON *
var fila = "";

// bucle para crear cada fila
for (var i = 0; i < 4; i++) {
  // bucle para añadir asteriscos a la fila actual
  for (var j = 0; j < 4; j++) {
    fila = fila + "*";
  }
  // añadir un salto de línea al final de cada fila
  fila = fila + "\n";
}

// imprimir cadena
console.log(fila);


console.log("\n");
console.log("\n");


//DIBUJO 1

//Valor maximo de asteriscos
var num_max = 9;

//Cadenas de filas y espacios
var fila= " ";
var espacios = " ";

//bucle para espacios y asteriscos
for (var i= 1; i<=num_max; i+=2){
    espacios= " ".repeat((num_max - i)/2); //Calcula el numero de espacios
    fila = "*".repeat(i); //Calcula el numero de asteriscos por fila
    console.log(espacios + fila); //Imprime las filas
}


console.log("\n");
console.log("\n");



//DIBUJO 2

//Valor maximo de asteriscos
var num_max = 9;

//Cadenas de filas y espacios
var fila= " ";
var espacios = " ";

//bucle para espacios y asteriscos
for (var i= 1; i<=num_max; i+=2){
    espacios= " ".repeat((num_max - i)/2); //Calcula el numero de espacios
    fila = "*".repeat(i); //Calcula el numero de asteriscos por fila
    console.log(espacios + fila); //Imprime las filas
}

//Segunda parte de la piramide
for (var j=(num_max - 2); j>0; j-=2){
    espacios= " ".repeat((num_max - j)/2); //Calcula el numero de espacios
    fila = "*".repeat(j); //Calcula el numero de asteriscos por fila
    console.log(espacios + fila); //Imprime las filas
}



console.log("\n");
console.log("\n");


//DIBUJO 3

//Cadena del abecedario
var abecedario = "";

//Definimos con un ciclo en una cadena el abecedario
for(var i=35; i>9; i--){
    abecedario= abecedario + i.toString(36); //Se agrega en una cadena el caracter del abecedario de forma inversa
}

//Ciclo para imprimir el abecedario reducido
for(var j=0; j<26; j++){
    var valor = abecedario.substr(j); //Se elimina el primer caracter de la cadena abecedario
    console.log(valor); //Se imprime el abecedario
}


console.log("\n");
console.log("\n");




//Juan Manuel Gonzalez Rodriguez
// SOPA DE LETRAS
//Version 0.1

var letras = []; //arreglo de letras
var palabra= ["c","a","j","a"]; //palabra a buscar


//Ciclo para obtener todas las letras del abecedario
for(var i=10; i<36; i++){
    letras.push(i.toString(36));
}

// Fila de letras
var fila="";


// Ciclo para rellenar la fila con letras aleatorias
for (var i=0; i<4; i++){
    for (var j=0; j<4; j++){
        var aleatorio= Math.floor(Math.random()*letras.length);
        fila = fila + letras[aleatorio]; 
    }
    
    // remplazar letras de la palabra a encontrar dentro de las letras aleatorias
    var new_fila = fila.replace(fila[i], palabra[i]);
    console.log(new_fila);
    fila = "";
}



