//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sumaimpares() {
  var suma = 0;
  // Sol 1:
  // suma = 1 + 3 + 5 + 7 ... 5000;
  // Sol 2:
  for(var i=1; i <= 50; i++){
    if ( i%2 === 0 ) {
      //Este es un numero par
    } else {
      //impar
      suma = suma + i;
    }
  }
  return suma;
}
console.log(sumaimpares());