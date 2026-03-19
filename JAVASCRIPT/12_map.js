// Criamos um array novo com o map e deixamos intacto o array original

const valores = [3, 5, 6, 8, 10]

const users = [
    {name: "Joao", age: 22},
    {name: "Pedro", age: 22},
    {name: "Bela", age: 22},
]

const valoresDobrados = valores.map(valor => valor * 2)

const usersNames = users.map(user => user.name)

console.log(valoresDobrados)

console.log(valores)

console.log(usersNames)