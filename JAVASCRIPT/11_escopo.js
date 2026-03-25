let minhaVariavelGlobal = "variavel global"

function minhaFuncao(){
    let minhaVariavelLocal = "variavel local"
    console.log(minhaVariavelGlobal)
    console.log(minhaVariavelLocal)
}

minhaFuncao()

function escopo(){
    let minhaVariavelLocal = "variavel local 2"
    console.log(minhaVariavelLocal)  
}

escopo()
