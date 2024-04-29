const elementos = [
    {tag: 'p', frase: 'frase 1'},
    {tag: 'div', frase: 'frase 2'},
    {tag: 'section', frase: 'frase 3'},
    {tag: 'footer', frase: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i  < elementos.length; i++) {
    let {tag, frase} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = frase;
    div.appendChild(tagCriada);
}

container.appendChild(div);