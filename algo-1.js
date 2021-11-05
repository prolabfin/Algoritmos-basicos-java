//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function a() {
  //Esta es una solucion
  // var numeros = [1, 2, 3, 4, 
  //   5, 6, 7, 8, 9, 10, 11, 
  //   255];
  //Segunda solucion
  var numeros = [];
  for(var i = 1; i < 256; i++) {
    numeros.push(i);
  }
  return numeros;
}
console.log(a());
