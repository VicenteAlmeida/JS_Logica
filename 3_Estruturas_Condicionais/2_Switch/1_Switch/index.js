// Estrutura básica so Switch

// switch ("b") {
//   case "a":
//     alert("O resultado é 'a'");
//   case "b":
//     alert("O resultado é 'b'");
//     break;
//   case "c":
//     alert("O resultado é 'c'");

//   default:
//     alert("Finalizando");
// }

const resultado = prompt("Escolha uma alternativa entre as letras A,B ou C");

switch (resultado) {
  case "A":
    alert(
      "O resultado não é a letra A,recarregue a página para tentar novamente!!"
    );
    break;
  case "B":
    alert("O resultado está certo,é a letra B,parabéns!!");
    break;
  case "C":
    alert(
      "O resultado não é a letra C,recarregue a tela para tentar novamente!!"
    );
    break;

  default:
    alert(
      "A letra que você digitou não corresponde a nenhuma das alternativas solicitadas.Recarregue a página para tentar novamente."
    );
}
