// spread
const numeros = [ 1,2,3,4];

// const novosNumeros = numeros;
// novosNumeros.push(5);
const novosNumeros = [...numeros, 5];
console.log(numeros);
console.log(novosNumeros);

// ----------
const rex = {
    nome: 'rex',
}
// desta forma os dois são alterados pois o 'max' faz uma
// referencia para 'rex', ele está 'apontando' para esse objeto
// const max = rex;
const max = {...rex, idade:2, familia: 'carnivoro'};
max.nome = 'Max';

console.log(rex);
console.log(max);
