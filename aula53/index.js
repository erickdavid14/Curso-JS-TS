function retornaFuncao (nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('erick');
const funcao2 = retornaFuncao('david');

console.log(funcao(), funcao2());

