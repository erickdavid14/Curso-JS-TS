// atribuição via desestruturação

/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, , cinco, ...resto] = numeros;
console.log(um, tres, cinco);
console.log(resto); */

const numeros = [ [1, 2, 3], [4, 5, 6],[7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[0]);