/*
valores que avaliam em falso:
false - valor literal

FALSY:
0 
'' "" ´´ - string vazia
null / undefined
NaN
*/
/* usando && -> false && true -> false (Vai retorna o valor falso mesmmo)
 
function falaOi () {
    return 'oi';
}
let vaiExecutar = 'Erick';
console.log(vaiExecutar && falaOi()); */ 

/* 
usando || -> true || false -> vai retorna o primeiro (o valor verdadeiro) so vai retorna false se todos forem false

const corUsuario = null;
const corPadrao = corUsuario || 'Red';
console.log(corPadrao);
 */
const a = 0;
const b = null;
const c = 'Erick';
const d = false;
const e = NaN;
console.log(a || b || c || d || e );