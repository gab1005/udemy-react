const somar = (...numeros) => {
    return numeros.reduce((a,b) => a+b,0);
}

console.log(somar(2, 3, 4));