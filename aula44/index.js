function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precismm ser um numero');
    };

    return x + y;
}
try {
console.log(soma(1,2));
console.log(soma(1,'dois'));
} catch(error){
    //console.log(error);
    console.log('alguma cois mais amigavel para o usuario.')
}