//const data = new Date (2024, 8, 6, 13, 13, 20);
// ano, mes, dia, hora, minuto, segundo e miselimo de segundo
/* const data = new Date (2024, 8, 6, 13, 15, 20,500); 
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);  mes começa do zero
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());  0 é domingo e 6 é sabado
console.log(data.toString());
console.log(Date.now());  mostra os milesimos de segundo desde o marco 0 da data que é 1º de Janeiro de 1970 */

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
 const dia = zeroAEsquerda(data.getDate());
 const mes = zeroAEsquerda(data.getMonth() + 1);
 const ano = zeroAEsquerda(data.getFullYear());
 const hora = zeroAEsquerda(data.getHours());
 const minutos = zeroAEsquerda(data.getMinutes());
 const segundos = zeroAEsquerda(data.getSeconds());

 return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

