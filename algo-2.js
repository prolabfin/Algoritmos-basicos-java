//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function contar1000() {
  var suma = 0;
  for(var i=1; i<=1000; i++) {
    if (i%2===0) {
      suma = suma + i;
    }
  }
  return suma;
}
var s = contar1000();
console.log(s);
