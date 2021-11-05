// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadrados() {
  var lista = [1,5,10,-2];
  for(var i=0; i<lista.length; i++) {
    var current = lista[i];
    var cuadrado = current * current;
    lista[i] = cuadrado;
  }
  return lista;
}
console.log(cuadrados());