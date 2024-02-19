function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};
const pessoa1 = criaPessoa('Erick', 'David', 23);
const pessoa2 = criaPessoa('Erivoneide', 'maria', 48);
const pessoa3 = criaPessoa('Heton', 'David', 23);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)