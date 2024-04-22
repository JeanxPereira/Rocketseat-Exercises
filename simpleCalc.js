let firstNum = prompt('first value:')
let secondNum = prompt('second value:')

firstNum = Number(firstNum)
secondNum = Number(secondNum)

const sum = firstNum + secondNum
const sub = firstNum - secondNum
const multi = firstNum * secondNum
const div = firstNum / secondNum
const rest = firstNum % secondNum
const equal = firstNum == secondNum
const oddOrEven = sum % 2 == 0

alert(`Soma de adição: ${sum}`)
alert(`Soma de subtração: ${sub}`)
alert(`Soma de multiplicação: ${multi}`)
alert(`Soma de divisão: ${div}`)
alert(`Restante da divisão: ${rest}`)

//check if the number is equal
if (equal) {
  alert(`Os valores inseridos são iguais.`)
} else {
  alert(`Os valores inseridos não são iguais.`)
}

//check if the number is even
if(oddOrEven) {
  alert(`o número é par.`);
}

// if the number is odd
else {
  alert(`o número é ímpar.`);
}
