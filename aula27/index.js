const pontuacaoUsuario = 1200;
const nivelpontuacao = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

/* if (pontuacaoUsuario >= 1000){
    console.log('Usuario Vip');
} else {
    console.log('Usuario Normal');
} */

const corUsuario = 'verde';
const corPadrao = corUsuario || 'Preto';
console.log(nivelpontuacao, corPadrao);




