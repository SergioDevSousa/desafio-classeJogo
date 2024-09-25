// a class cria o heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
//função ataque. Cada heroi um tipo de ataque
    atacar() {
        let ataque;
        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou uma espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else {
            ataque = 'usou shuriken';
        }
        //retorna a função atacar
        return `Você escolheu o Heroi ${this.nome} do tipo ${this.tipo} e tem ${this.idade}. Você atacou e ${ataque}`;
    }
}
//declara a variavel guerreiro criando um novo heroi
let guerreiro = new Heroi("Conan", "120 anos", "mago");
//saída onde mostra o tipo do guerreiro e que ataque usou
console.log(guerreiro.atacar());
