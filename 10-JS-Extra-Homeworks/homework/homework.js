// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí\
  var Objeto={};
  array=[];
  for(var i=0;i<string.length;i++){
    array.push(string.charAt(i));
    Objeto[array[i]]=0
  }
  for(var i=0;i<array.length;i++){
    if(string.charAt(i)===array[i]){
      Objeto[array[i]]++;
    }
  }
    return Objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string="";
  var array=[];
  for(var i=0;i<s.length;i++){
    array[i]=s.charAt(i);
  }
  var proceso=function(element){
    if(element === "Ä" || element ==="B" || element==="C" || element==="D" || element ==="E" || element ==="F" || element==="G" || element==="H"|| element ==="I" || element==="J" || element==="K" || element ==="L" || element ==="M" || element==="N" || element==="O"|| element ==="P" || element==="Q" || element==="R" || element ==="S" || element ==="T" || element==="U" || element==="V"|| element ==="W" || element==="X" || element==="Y" || element ==="Z"){
    string=string+element;
    }
    else if(element==="A"){
      string=string+element;
    }
  }
  var proceso2=function(element){
    if(element ==="a" || element ==="b" || element==="c" || element==="d" || element ==="e" || element ==="f" || element==="g" || element==="h"|| element ==="i" || element==="j" || element==="k" || element ==="l" || element ==="m" || element==="n" || element==="o"|| element ==="p" || element==="q" || element==="r" || element ==="s" || element ==="t" || element==="u" || element==="v"|| element ==="w" || element==="x" || element==="y" || element ==="z"){
    string=string+element;
    }
  }
  array.forEach(proceso);
  array.forEach(proceso2,string.length);
  return string;



}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var stringPuente="";
  var array=[];
  var arrayUltimo=[];
  array=str.split("").reverse();
  for(var i=0;i<=array.length;i++){
    if(array[i]!=" " && array[i]!=undefined)
    {
    stringPuente=stringPuente+array[i];
    }
    else
    {
      arrayUltimo.push(stringPuente);
      stringPuente="";
    }

  }
   arrayUltimo.reverse();
   return arrayUltimo.join(" ");
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num=numero.toString();
  if(num.split("").reverse().join("")==numero){
    return "Es capicua";
    }
   else{
    return "No es capicua";
   }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var ArrayCadena=cadena.split("");
  var procesoFilter=function (letra){
    return (letra!="a" && letra!="b" && letra!="c");
  }
  var nuevoArray=ArrayCadena.filter(procesoFilter);
  return nuevoArray.join("");
}


function sortArray(arr){
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 var arrayResultado=[];
 var palabraMasLarga="";
   var palabracorta="";
 for(var i=0;i<arr.length;i++){
   palabracorta=arr[i];
   if(arr[i+1]!=undefined){
     if(palabracorta.length<=arr[i+1].length){
       if(palabraMasLarga.length>palabracorta.length){
         palabraMasLarga=arr[i];
         arrayResultado.push(palabraMasLarga);
       }
       else{
        arrayResultado.push(palabracorta);
       }
     }
     else{
       palabraMasLarga=arr[i];
     }
   }
   else{
     if(palabraMasLarga.length>=arr[i].length){
       arrayResultado.push(arr[i]);
       arrayResultado.push(palabraMasLarga);
     }
     else{
       palabracorta=palabraMasLarga;
       palabraMasLarga=arr[i];
       arrayResultado.push(palabracorta);
       arrayResultado.push(palabraMasLarga);
     }

   }
 }
 return arrayResultado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

