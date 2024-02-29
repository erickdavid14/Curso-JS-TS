function criaPessoa (nome, sobrenome, idade){
    return {
         nome,sobrenome, idade
    };
}
const pessoa1 = criaPessoa('Erick', 'David', 23);
const pessoa2 = criaPessoa('Emily', 'Ramos', 19);
const pessoa3 = criaPessoa('Helton', 'David', 23);
const pessoa4 = criaPessoa('Maria', 'Heloisa', 15);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);


/*const pessoa1 = {
    nome: 'Erick',
    sobrenome: 'David',
    idade: 23
};
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);*/