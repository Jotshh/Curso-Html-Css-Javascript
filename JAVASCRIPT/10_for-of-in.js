let frutas = ["banana","maçã","pêra","laranja"]

for(let fruta of frutas){
    console.log(fruta)
}


let pessoa = {
    nome: "jotss",
    idade: 22,
    genero: "masculino",
    altura: 1.80
}

//cada propiedade do obejto pessoa, vai ser armazenada na variavel key

for (let key in pessoa){
    console.log(`${key}: ${pessoa[key]}`)
}