const alunos = [];
let matricula = 1;

const adicionarAluno = (nome, idade) => {
    const aluno = {
        matricula: matricula.toString(),
        nome: nome,
        idade: idade,
        disciplinas: [],
        adicionarDisciplina(disciplina) {
            this.disciplinas.push(disciplina);
        }
    }
    alunos.push(aluno);
    matricula++;
}

const adicionarDisciplina = (disciplina) => {
    alunos.forEach(aluno => aluno.disciplinas.push(disciplina));
}

adicionarAluno("Amanda", 22);
adicionarAluno("Bianca", 21);
adicionarAluno("Carol", 26);
adicionarAluno("Déborah", 30);

adicionarDisciplina("Javascript");
alunos[3].adicionarDisciplina("Typescript");
alunos[1].adicionarDisciplina("Node.js");

console.log(alunos);