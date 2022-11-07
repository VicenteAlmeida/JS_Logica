let nomeTurista = prompt("Olá turista! Qual seu nome?")
let pergunta = prompt("Você já visitou alguma cidade?(Sim/Não)")
let cidade = ""
let contagem = 0

while(pergunta === "Sim"){
  let pergunta1 = prompt("Qual cidade você visitou?")
  cidade+=" - " + pergunta1 + "\n"
  contagem ++
  pergunta = prompt("Você visitou alguma outra cidade?(Sim/Não)")
}

alert(
  "Turista: " + nomeTurista +
  "\nQuantidade de cidades visitadas: " + contagem + 
  "\nCidades Visitadas:" + "\n" + cidade
 

)



