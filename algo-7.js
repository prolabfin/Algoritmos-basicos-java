// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function a() {
  var numeros = [];
  for(var i = 1; i <= 50; i++ ) {
    if ( i%2 !== 0 ) {//Captura impares
      numeros.push(i); // función que añade un elemento a una lista (array) lo hace de forma ordenada, en la última posición.
    }
  }
  return numeros;
}
console.log(a());