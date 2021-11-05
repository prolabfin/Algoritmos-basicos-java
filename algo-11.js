// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
var lista = [1,5,10,-2];

function mayor() {
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

function menor() {
  var base = lista[0];

  for(var i=0; i<lista.length; i++) {
    var current = lista[i];
    if (base < current) {
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

function avg() {
  var acumulador = 0;
  for(var i=0; i<lista.length; i++) {
    acumulador = acumulador + lista[i];
  }
  //Dividimos la sumatoria entre
  //el numero de elementos del array
  var avg = acumulador/lista.length;
  return avg;
}

function calcular() {
  var may = mayor();
  var min = menor();
  var promedio = avg();
  return [may, min, promedio];
}

console.log(calcular());