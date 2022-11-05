const nameVehicle1 = prompt("Informe o nome do primeiro veículo:");
const velocityVehicle1 = prompt("Informe a velocidade do primeiro veículo:");
const nameVehicle2 = prompt("Informe o nome do segundo veículo:");
const velocityVehicle2 = prompt("Informe a velocidade do segundo veículo:");

if (velocityVehicle1 > velocityVehicle2) {
  alert("Veículo " + nameVehicle1 + " tem a maior velocidade!");
} else if (velocityVehicle2 > velocityVehicle1) {
  alert("Veículo " + nameVehicle2 + " tem a maior velocidade!");
} else {
  alert("As velocidades são iguais.");
}
