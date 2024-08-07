/* function conta(x, y){
    return x > y ? x : y;
}
const numeros = conta(25, 25)
console.log(numeros); */

// FizzBuzz
const resultado = fizzBuzz(12);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'nao é um numero';
    if (entrada % 3 ===0 & entrada % 5 ===0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 ===0)
        return 'Buzz'
    return entrada;
}