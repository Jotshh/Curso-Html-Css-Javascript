const inpuForm = document.querySelector('#busca');

const botaoBusca = document.querySelector('#botaoBusca');

const resultadoDiv = document.querySelector('#resultado');  

inpuForm.addEventListener('keydown', (e) => {
    console.log(e.key);
});

inpuForm.addEventListener("focus", (e) => {
    inpuForm.style.backgroundColor = "#ff0";
})

inpuForm.addEventListener("blur", (e) => {
    inpuForm.style.backgroundColor = "#FFF";
})

function searchResult(){
    const valorBusca = inpuForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Buscando: ${valorBusca}`
    } else {
        resultadoDiv.textContent = "Insira algo na busca"
    }
}

botaoBusca.addEventListener('click', (e) => {
    searchResult();
});