const students = [
  {
    name: 'Mayk',
    firstNote: 3.1,
    secondNote: 7.2,
  },
  {
    name: 'Jean',
    firstNote: 6,
    secondNote: 4.4,
  },
  {
    name: 'Teló',
    firstNote: 1.2,
    secondNote: 3.1,
  },
  {
    name: 'Clara',
    firstNote: 5.6,
    secondNote: 8.4,
  }
]

let studentID = prompt('digite o ID do aluno:')

let index = studentID - 1

let average = students[index].firstNote + students[0].secondNote / 3
average = average.toFixed(1)

let student = students[index].name

let result = average > 6

let messagePass;



if (result) {
  messagePass = `Parabéns ${student}! Você foi aprovado(a) no concurso!`;
} else {
  messagePass = `Não foi dessa vez, ${student}! Tente novamente!`;
}

alert(`A média do(a) aluno(a) ${student} é: ${average}\n${messagePass}`);
