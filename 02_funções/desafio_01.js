function somar(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const soma = somar(5)(5)(5);
console.log(soma);

console.log("-------------");
function calcular(a){
    return function(b){
        return function(op){
            return op(a, b);
        }
    }
}

function subtrair(x, y){
    return x - y
}

function dividir(x, y){
    return x / y
}

const calc1 = calcular(5)(5)(subtrair);
const calc2 = calcular(5)(5)(dividir);
console.log(calc1);
console.log(calc2);