let opcao = "Encerrar";

do {
  opcao = prompt(
    "Senhor usuário,seja bem vindo!Escolha uma das opções:\n1-Pegar\n2-Verificar\n3-Soltar\n4-Transar\n5-Encerrar"
  );

  switch (opcao) {
    case "Pegar":
      alert("Você escolheu a opção Pegar.");
      break;
    case "Verificar":
      alert("Você escoheu a opção Verificar.");
      break;
    case "Soltar":
      alert("Você escolheu a opção Soltar.");
      break;
    case "Transar":
      alert("Você escolheu a opção Transar.");
      break;
    case "Encerrar":
      alert("Você encerrou a aplicação");
      break
    default:
      alert("Opção inválida!!");
  }
} while (opcao !== "Encerrar");
