const arr = ["Frodo","Sam","Merry","Pippin","Gandalf","Aragorn","Legolas","Gimli"]
console.log(arr)

//Adicionar elementos no final do array (push)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Adicionar elementos no começo do array(unshift)
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//Remover ultimo elemento (pop)
const removerElemento = arr.pop()
console.log(arr)
console.log(removerElemento)

//Remover elementos do começo do array (shift)
const remove = arr.shift()
console.log(arr)
console.log(remove)


//Pesquisar por um elemento (includes) retorna booleano
const inclui = arr.includes("Gandalfdd")
console.log(inclui)

//Pesquisar pelo indice (indexof)
const pesquisa = arr.indexOf("Gandalf")
console.log(pesquisa)

//Cortar e concatenar os arrays (slice)

const hobbits = arr.slice(0,4)
console.log(arr)
console.log(hobbits)


