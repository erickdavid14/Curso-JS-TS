function relogio (){
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('PT-BR',{
        timeZone:'GMT'
    });
}
const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;
function iniciaRelogio() {
     timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e){
    const el = e.target;
    
    if (el.classList.contains('iniciar') ){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    }
    if (el.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.add('pausado');
    }
    if (el.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    }
});
}
relogio();
/* iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
}); */