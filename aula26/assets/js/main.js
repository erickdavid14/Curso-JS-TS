const form = document.querySelector('#form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultdo('Peso invalido', false);
        return;
    }

    if (!altura){
        setResultdo('Altura invalida', false);
        return;
    }

    console.log('cheguei qui');
});

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultdo (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}