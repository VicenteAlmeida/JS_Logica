let nome = "Vicente";

//Primeiro recurso nativo do Navegador: Console
console.log(nome);
console.error(nome);
console.warn(nome);

//Segundo recurso nativo do navegador: Window

window.alert(nome); //Exibe um alerta na página
nome = window.prompt("Insira o seu nome:"); //Mostra o texto com uma caixa para digitar alguma coisa
console.log(nome);

let confirmacao = window.confirm("Confirma essa ação?");
console.log(confirmacao);
