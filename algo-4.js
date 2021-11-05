//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function iterar() {
  var acumulador = 0;
  var lista = [-5,2,5,12,10,8,5];

  for(var i=0; i<lista.length; i++) {
    var encurso = lista[i];
    acumulador = acumulador + encurso;
    //console.log(encurso);
  }
  return acumulador;
}
var it = iterar();
console.log(it);