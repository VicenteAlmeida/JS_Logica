const input1 = prompt("Informe o primeiro número");
const input2 = prompt("Informe o segundo número");

const x = parseFloat(input1);
const y = parseFloat(input2);

const sum = x + y;
const subtraction = x - y;
const division = x / y;
const multiplication = x * y;

alert("O resultado da soma é: " + sum);
alert("O resultado da subtração é: " + subtraction);
alert("O resultado da divisão é: " + division);
alert("O resultado da multiplicação é: " + multiplication);
alert(
  "Relatório de resultados:\n" +
    "A sua soma resultou em: " +
    sum +
    "\nA sua subtração resultou em: " +
    subtraction +
    "\nA sua divisão resultou em: " +
    division +
    "\nA sua multiplicação resultou em: " +
    multiplication
);
