function funcao(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    
    console.log(acumulador);
}
funcao('+', 1, 10, 20, 30, 40);




// atribuiçao via desistruturação 
/* function funcao([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
}
let aray = ['Erick', 'David', 23];
funcao(aray); */


// para usar um valor padrao no parametro =
/* function funcao(a, b, c = 5){
    console.log(a + b + c);
}
funcao(1, 10); */


// arguments sustenta os argumentos

/* function funcao (){
    let total = 0;
    for (let argumento of arguments ){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */