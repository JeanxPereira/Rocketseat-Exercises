/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert("Hello World!");

/*2. Crie um script que declare duas letiáveis e exiba o resultado da soma entre elas. */
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log("A soma é:", sum);

/* 
3. Crie um script que declare uma letiável e verifique se o seu valor é um número.
Se for, exiba a mensagem "É um número",
caso contrário, exiba a mensagem "Não é um número". */
let value = 10;
if (typeof value === "number") {
    console.log("É um número");
} else {
    console.log("Não é um número");
}

/* 
4. Crie um script que declare uma letiável e verifique se o seu valor é uma string.
Se for, exiba a mensagem "É uma string", caso contrário,
exiba a mensagem "Não é uma string". */
let text = "Olá";
if (typeof text === "string") {
    console.log("É uma string");
} else {
    console.log("Não é uma string");
}

/* 
5. Crie um script que declare uma letiável e verifique se o seu valor é
um booleano. Se for, exiba a mensagem "É um booleano", caso contrário,
exiba a mensagem "Não é um booleano". */
let isBoolean = true;
if (typeof isBoolean === "boolean") {
    console.log("É um booleano");
} else {
    console.log("Não é um booleano");
}

/* 
6. Crie um script que declare duas letiáveis e exiba o resultado da subtração entre elas. */
let numS1 = 10;
let numS2 = 4;
let subtraction = numS1 - numS2;
console.log("A subtração é:", subtraction);

/* 
7. Crie um script que declare duas letiáveis e exiba o resultado da multiplicação entre elas. */
let numM1 = 7;
let numM2 = 3;
let multiplication = numM1 * numM2;
console.log("A multiplicação é:", multiplication);

/* 
8. Crie um script que declare duas letiáveis e exiba o resultado da divisão entre elas. */
let numD1 = 15;
let numD2 = 5;
let division = numD1 / numD2;
console.log("A divisão é:", division);

/* 
9. Crie um script que declare uma letiável e verifique se o seu valor é um número par.
Se for, exiba a mensagem "É um número par", caso contrário,
exiba a mensagem "Não é um número par". */
let numberP = 6;
if (numberP % 2 === 0) {
    console.log("É um número par");
} else {
    console.log("Não é um número par");
}

/* 
10. Crie um script que declare uma letiável e verifique se o seu valor é um número ímpar.
Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem
"Não é um número ímpar". */
let numberIMP = 9;
if (numberIMP % 2 !== 0) {
    console.log("É um número ímpar");
} else {
    console.log("Não é um número ímpar");
}
