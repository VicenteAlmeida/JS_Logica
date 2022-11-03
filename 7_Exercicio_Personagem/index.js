const personage1 = prompt("Informe o nome do personagem atacante.");
const attackPower = prompt(
  "Agora informe o poder de ataque do seu personagem atacante."
);
const personage2 = prompt("Informe o nome do personagem de defesa.");
let amountOfPoints = prompt(
  "Agora insira a quantidade de pontos de vida do seu personagem"
);
const defensePower = prompt("Informe o poder de defesa do seu personagem");
const shield = prompt("Seu personagem possui escudo? (Sim/Não)");
let damageDone = 0;

if (attackPower > defensePower && shield === "Não") {
  damageDone = attackPower - defensePower;
} else if (attackPower > defensePower && shield === "Sim") {
  damageDone = (attackPower - defensePower) / 2;
}

amountOfPoints -= damageDone;

alert(
  personage1 + " causou " + damageDone + " pontos de dano em " + personage2
);
alert(
  personage1 +
    "\nPoder de ataque: " +
    attackPower +
    "\n\n" +
    personage2 +
    "\nPontos de vida: " +
    amountOfPoints +
    "\nPoder de defesa: " +
    defensePower +
    "\nPossui escudo: " +
    shield
);
