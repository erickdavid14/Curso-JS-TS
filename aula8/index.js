const nome = 'Erick Daivd';
const sobreNome = 'Silva';
const idade = 23 ;
const peso = 65 ;
const alturaEmM = 1.70;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade - 1;

console.log( `${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg` );
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);