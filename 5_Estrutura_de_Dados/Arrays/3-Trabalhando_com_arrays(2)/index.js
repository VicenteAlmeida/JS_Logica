const arr = ["Frodo","Sam","Merry","Pippin","Gandalf","Aragorn","Legolas","Gimli"]
console.log(arr)

//Cortar e concatenar os arrays (slice)

 const hobbits = arr.slice(0,4)
 const outros = arr.slice(-4)
 console.log(arr)
 console.log(hobbits)
 console.log(outros)

//Concatenar arrays (concat)
const concatenar = outros.concat("Vicente")
 console.log(concatenar)

//Substituição dos elementos (splice)
const elementosRemovidos = concatenar.splice(0,2,"Vicente","Letícia")


