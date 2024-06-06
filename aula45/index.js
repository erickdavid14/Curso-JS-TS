function retornaHora(data) {
    if (data && !(data instanceof Date) ) {
        throw new TypeError('Esperando instância de Date ');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('PT-BR')
}
try{
const data = new Date('06-06-2024 12:30:25');
const hora = retornaHora(11);
console.log(hora);
} catch(e) {
    // tratar erro
}finally {
    console.log('tenha um bom dia!');
}






















/* try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('manipulei um arquivo e deu erro');
    console.log('fechei o arquivo')
} catch (e) {
    console.log('tratando o erro');
} finally {
    console.log('sempre sou executado');
} */

