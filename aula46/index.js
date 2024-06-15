function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString();
}

const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);