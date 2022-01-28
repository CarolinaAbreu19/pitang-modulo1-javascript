const aluno = {
    matricula: "100101",
    nome: "Fulano de Tal",
    idade: 21,
    disciplinas: [],
    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
}

aluno.adicionarDisciplina("matematica");
aluno.adicionarDisciplina("portugues");

console.log(aluno);