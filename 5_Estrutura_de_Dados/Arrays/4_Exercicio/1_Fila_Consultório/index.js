const listaDeEspera = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < listaDeEspera.length; i++) {
    pacientes += i + 1 + "° - " + listaDeEspera[i] + "\n";
  }
  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
  );
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      listaDeEspera.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = listaDeEspera.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila");
      } else {
        alert("Não há pacientes na fila!!");
      }
      
      break;
    case "3":
      alert("Encerrando");
      break;
    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
