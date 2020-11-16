var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log( 'é verdadeiro');
  var x = 10;
  
} else if(possuiDoutorado) {
  console.log('possui doutorado');
} else{
  console.log('nao possui nada');
}

console.log(x);

var rua  = 0;

if(rua){
  console.log(rua);
} else {
  console.log('nome da rua nao existe');

}

//if (!naoPossuiGraduacao)//{//
  //console.log(possuiGraduacao);
 // console.log('nao possui graduacao');
//}//

var x = 'Gato';

console.log(x === 'Gato')

var z = 10;

console.log(x !== 11);


var condicional = (5 - 10) && (5 + 5);
if (condicional){
  console.log('verdadeiro');
} else {
  console.log('falso');
}



var condicional2 = (5 - 5) || (5 + 5) && (10 -2);
console.log(condicional2);
