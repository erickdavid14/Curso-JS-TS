// for in ler os idencis ou chaves do objetos

const pessoa = {
    nome: 'Erick',
    sobrenome: 'david',
    idade: 24
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

//const frutas = ['maçã', 'goiaba', 'uva'];
/* for (let indice in frutas) {
    console.log(frutas[indice]);
} */

/* for (let i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i]);
} */