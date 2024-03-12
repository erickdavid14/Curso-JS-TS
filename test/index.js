function criaPessoa (nome, sobrenome, idade) {
        return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Erick','David','23');
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);