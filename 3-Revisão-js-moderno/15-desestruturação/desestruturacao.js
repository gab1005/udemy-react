const frutas = ['laranja', 'banana', 'uva'];

let [fruta1, , fruta3] = frutas;

console.log(fruta1);
// console.log(fruta2);
console.log(fruta3);

const pessoa = {
    nome: 'joão',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
}

let {idade, idioma} = pessoa;

// console.log(idade);
// console.log(idioma);

// const localidade = (pessoa) => `vc mora no ${pessoa.pais} e fala ${pessoa.idioma}`;
const localidade = ({pais, idioma}) => `vc mora no ${pais} e fala ${idioma}`;
console.log(localidade(pessoa));
// o JS 'encaixa' a 'pessoa' nos atributos conrespondentes