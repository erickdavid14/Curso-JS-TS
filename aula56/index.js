function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto){
            return `${this.nome} esta ${assunto}`
        },

        peso ,
        altura,
        // getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}
const p1 = criaPessoa('Erick','David', 68, 1,70 );
p1.nomeCompleto = 'Emily ramos oliveira'
console.log(p1.nomeCompleto);