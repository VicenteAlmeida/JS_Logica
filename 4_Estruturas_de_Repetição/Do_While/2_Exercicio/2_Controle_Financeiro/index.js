let quantidadeInicial = prompt("Qual a quantidade inicial de investimento?");
quantidadeInicial = parseFloat(quantidadeInicial)
let opcoes = "";

do {
  opcoes = prompt(
    "Seu saldo disponível é R$ " +
      quantidadeInicial +
      "\nO que você deseja fazer?\n1-Adicionar dinheiro\n2-Remover dinheiro\n3-Sair"
  );
  switch(opcoes){
    case "1":
      quantidadeInicial+= parseFloat(prompt("Informe o valor a ser adicionado."))
      break
      case "2":
        quantidadeInicial-=prompt("Informe o valor a ser removido.")
        break
        case "3":
        alert("Você encerrou o programa.")
        break
        default:("Valor inválido")
  }

} while (opcoes !== "3");
