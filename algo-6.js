// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function iterar() {
  var lista = [1,3,5,7,20];
  var acumulador = 0;
  for(var i=0; i<lista.length; i++) {
    acumulador = acumulador + lista[i];
  }
  //Dividimos la sumatoria entre
  //el numero de elementos del array
  var avg = acumulador/lista.length;
  return avg;
}
var it = iterar();
console.log(it);