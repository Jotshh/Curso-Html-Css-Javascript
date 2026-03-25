// variaveis

const numbers = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]

// copiar um array

const numbersCopy = [...numbers]
console.log(numbersCopy)

// concatenar arrays

const allNumbers = [...numbers, ...numbers2]
console.log(allNumbers)

// adicionar elementos em um array

const addNumbersInArray = [0, ...numbers, 6, 7, 8]
console.log(addNumbersInArray)

// também podemos usar o spread em um objeto

const users = {name: "Joao", age: 22} 
const newUsers = { name: "Otavio", age: 43}

const usersCopy = {...users}
console.log(usersCopy)

// modificando um objeto dentro do objeto

const usersCopy2 = {...users, name: "Pedro", city: "Rio de Janeiro"}
console.log(usersCopy2)