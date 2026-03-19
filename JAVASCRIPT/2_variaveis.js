// variavel do tipo global
var name = "jotss" 

// variavel constante
const pi = 3.141592

// variavel dentro do escopo de um bloco
let numero = 12

// camelCase em variaveis compostas 
let lastName = "sstoj"

// variaveis de numeros podem ser float ou inteiros

const idade = 65

const valor1 = 210.57
const valor2 = 312.46

console.log(`A soma do valor 1:  ${valor1} + valor 2: ${valor2} é igual a: ${valor1 + valor2}`)

// concatenando em javascript
console.log(`Meu nome é:  ${name} ${lastName} e minha idade é: ${idade}`)

// variaveis booleanas 
const isLogin = true

console.log(`O usuário:  ${name} está logado? ${isLogin}`)

// variavel do tipo array, é uma lista de vetores
const frutas = ["banana", "maçã", "pitanga"]

console.log(`Nome de frutas:  `, frutas)
console.log(`Nome de frutas:  `, frutas[2])

// objetos em javascript

const usuario = {
    name: "pedro",
    lastName: "jose",
    idade: 32,
}

console.log(`Usuário: `, usuario)
console.log(`Usuário: `, usuario.lastName)

// valor nulo, para usar em validações

const vazio = null 

// typeof serve para retornar qual o tipo de dados estamos trabalhando

console.log(typeof idade)






// node .\nome-do-arquivo.js para rodar o programa