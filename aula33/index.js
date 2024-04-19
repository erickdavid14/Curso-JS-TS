const pessoa = {
    nome: 'Erick',
    sobrenome: 'David',
    idade: 23,
    endereco: {
        rua: 'Jose donizete',
        numero: 39
    }
};

// atribuição via desestruturação em objetos

/* const { nome, sobrenome, endereco:  {rua: r, numero: n}} = pessoa; */
const { nome, sobrenome,...resto} = pessoa;

console.log(nome, sobrenome,resto);