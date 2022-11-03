const primeiroNome = prompt("Digite seu primeiro nome");
const sobrenome = prompt("Digite seu sobrenome");
const campoDeEstudo = prompt("Digite o seu campo de estudo");
const anoDeNascimento = prompt("Digite seu ano de nascimento");
const nomeCompleto = primeiroNome + " " + sobrenome;
const nomeCompconsto_Alert = alert(
  "Seu nome completo é: " + primeiroNome + " " + sobrenome
);
const campoDeEstudoAlert = alert("Seu campo de estudo é: " + campoDeEstudo);
const date = new Date();
const year = date.getFullYear();
const idade = year - anoDeNascimento;
const idadealert = alert("Você tem " + idade + " anos de idade.");
const mensagemInteira = alert(
  "Relatório de Informações:\n" +
    "Seu nome completo é: " +
    nomeCompleto +
    " \nO seu campo de estudo é: " +
    campoDeEstudo +
    "\nA sua idade é " +
    idade +
    " anos."
);
