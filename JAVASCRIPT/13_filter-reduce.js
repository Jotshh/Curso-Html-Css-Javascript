// Criamos um array novo com o filter com as regras que quisermos
// no nosso exemplo, criaremos um array com os valores maiores que 5
// e um array com os valores pares e um array com os users maiores de idade

const valores = [3, 5, 6, 7, 10]

const users = [
    {name: "Joao", age: 17, priceProduct: 645},
    {name: "Pedro", age: 32, priceProduct: 436},
    {name: "Bela", age: 55, priceProduct: 235},
]

const numerosMaioresQueCinco = valores.filter(num => num > 5)

console.log(numerosMaioresQueCinco)

const numerosPares = valores.filter(num => num % 2 === 0)

console.log(numerosPares)

const usersMaioresDeIdade = users.filter(user => user.age >= 18)

console.log(usersMaioresDeIdade)


// vamos criar um array com o reduce

const somaTotalDosValores = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(somaTotalDosValores)

const somaTotalDeProdutos = users.reduce((acc, val) => acc + val.priceProduct, 0)

console.log(somaTotalDeProdutos)    