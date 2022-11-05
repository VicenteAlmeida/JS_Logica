const converter = prompt(
  "Digite a sua medida em metros!\nDigite somente números!"
);
const converter1 = prompt(
  "Para qual medida você gostaria de converter?\nDigite a medida de maneira abreviada!\nMilímetro(mm)\nCentímetro(cm)\nDecímetro(dm)\nDecâmetro(dam)\nHectômetro(hm)\nQuilômetro(km)"
);

switch (converter1) {
  case "mm":
    alert("A sua medida em milímetros é de " + converter * 1000 + ".");
    break;
  case "cm":
    alert("A sua medida em centímetros é de " + converter * 100 + ".");
    break;
  case "dm":
    alert("A sua medida em decímetros é de " + converter * 10 + ".");
    break;
  case "dam":
    alert("A sua medida em decâmetros é de " + converter / 10 + ".");
    break;
  case "hm":
    alert("A sua medida em hectômetros é de " + converter / 100 + ".");
    break;
  case "km":
    alert("A sua medida em quilômetros é de " + converter / 1000 + ".");
    break;

  default:
    alert("Você digitou valores inválidos: Por favor corrija");
}
