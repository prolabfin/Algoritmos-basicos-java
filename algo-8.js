// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function calcmay() {
  var arr = [1,3,5,7];
  var resultado = [];
  var Y = 3;
  for(var i=0; i<arr.length;i++ ) {
    var current = arr[i];
    if ( current > Y ) {
      resultado.push(current);
    }
  }
  return resultado;
}
console.log(calcmay());