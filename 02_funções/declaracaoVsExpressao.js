let a = 4;
console.log(a);

// function declaration
function bomDia() {
    console.log("Bom dia!");
}

bomDia();

console.log("------------");
// function expression
const boaTarde = function() {
    console.log("Boa tarde!");
} 

boaTarde()

console.log("------------");
function somar(a, b) {
    return a + b;
}

const resultado = somar(3, 4); // caso a função não tenha retorno, valor UNDEFINED
console.log(resultado);