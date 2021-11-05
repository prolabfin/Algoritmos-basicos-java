//Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [8,3,5,7,7] el número mayor (max) es 7). 

function mayor() {
  var lista = [8,3,7,9,-3];
  var base = lista[0];

  for(var i=0; i<lista.length; i++) {
    var current = lista[i];
    if (base > current) {
      // No ocurre nada
      // Por que base siendo el mayor.
    } else {
      //Si encuentro a un numero mayor
      //que el base, reasigno base.
      base = current;
    }
    //console.log(current);
  }
  return base;
}
var may = mayor();
console.log(may);