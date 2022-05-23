const alunos = [
    { nome: 'Juliana', nota: 10 },
    { nome: 'Bia', nota: 7.3 },
    { nome: 'Gil', nota: 5.8 },
    { nome: 'Léo', nota: 7.6 },
    { nome: 'Gui', nota: 9.1 },
    { nome: 'Lia', nota: 4.9 },
    { nome: 'Rui', nota: 7.0 },
];

// Paradigma PROCEDURAL
const aprovados = [];
for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 7) {
        aprovados.push(alunos[i]);
    }
}

console.log(aprovados);

// Paradigma FUNCIONAL
console.log("----------------");
const estaAprovado = aluno => aluno.nota >= 7;

const aprovado2 = alunos.filter(estaAprovado);
console.log(aprovado2);