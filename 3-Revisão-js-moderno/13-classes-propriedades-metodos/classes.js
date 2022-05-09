class Animal{
    constructor(f){
        this.familia = f;
    }

    andar = () => {
        return 'andando...';
    }
}

// para extender a classe Animal para a classe Cachorro, basta colocar
// extends Animal
// mas se atentando para os contrutores da classe 'pai'
// para isso usamos o super para poder passar as variaveis necessarias.
class Cachorro extends Animal{
    constructor(n, i){
        super('carnivoros');
        this.nome = n;
        this.idade = i;
    }

    // outra opção é 
    // latir = () => {}
    latir(){
        return `${this.nome}: au au`;
    }
}

let rex = new Cachorro('Rex', 2);
console.log(rex);
console.log(rex.latir());
console.log(rex.andar());
console.log(rex.familia);

// let max = new Cachorro('Max', 1);
// console.log(max.latir());
// console.log(max);