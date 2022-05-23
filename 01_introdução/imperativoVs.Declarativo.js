const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

// paradigma IMPERATIVO
function media(notas){  
    let total = 0;
    for(let i = 0; i < notas.length; i++){
        total += notas[i]
    }
    return (total / notas.length).toFixed(2);
}

const mediaTurma = media(notas);
console.log(`Média é ${mediaTurma}`);

/* 
> foco no fluxo
> estados mutáveis
> foco no "como"
> maior quantidade de código
> baixo nível de escalabilidade
> mais conhecimento
> mais explícito
*/


// paradigma DECLARATIVO
const somar = (a, b) => a + b;
const dividir = (a, b) => a / b;

const mediaTurma1 = dividir(
    notas.reduce(somar),
    notas.length
);

console.log(`-----------------------`)
console.log(`Média é ${(mediaTurma1).toFixed(2)}`);

/* 
> foco na lógica
> imutabilidade
> foco no "que"
> menor quantidade de código
> alto nível de escalabilidade
> menor conhecimento
> menor explícito
*/