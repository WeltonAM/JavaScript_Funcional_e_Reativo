const felizNatal = () => console.log("Feliz natal");
felizNatal();

console.log("------------");
const saudacao = nome => `Fala ${nome}, blz?!`
console.log(saudacao('Juliana'));

console.log("------------");
const somar = (...numeros) => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total;
}

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("------------");
const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(10));

// arrow function limita uso de "THIS"
console.log("------------");
Array.prototype.ultimo = function() {
    console.log(this[this.length -1]);
}

Array.prototype.primeiro = primeiro => {
    console.log(this[0]);
}

const numeros1 = [-333, 1, 2, 3, 500];
numeros1.ultimo();
numeros1.primeiro();