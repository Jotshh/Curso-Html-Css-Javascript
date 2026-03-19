// seleção por id

const content = document.getElementById('content');
console.log("content", content);

content.innerHTML = `<h1>Conteúdo alterado via JS</h1>
`
content.style.backgroundColor = "red";
content.style.fontSize = "20px";

// seleção por classe
// retorna um html colletion - um array
const classText = document.getElementsByClassName('text');
console.log("classText", classText);

for(text of classText){
    text.style.backgroundColor = "yellow";
}

// selecao por tag

const titles = document.getElementsByTagName('h2');
console.log("titles", titles);
for(title of titles){
    title.style.fontSize40 = "40px";
} 

// query selector

const elementFeature = document.querySelector('#feature');

const newElement = document.createElement('p');

newElement.textContent = "Novo parágrafo";

elementFeature.appendChild(newElement);

elementFeature.insertAdjacentHTML("beforeend", `
    <div>
    <p>Outro parágrafo 2</p>
    </div>`);

document.body.insertBefore(newElement, elementFeature);

// query selector all

const links = document.querySelectorAll('#links a');
console.log("links", links);

for(link of links){
    link.classList.add('feature-links');

    console.log(link.getAttribute('href'));
    link.target = "_blank"; 
    link.title = link.getAttribute('href').slice(0,-5);
} 

// remove 

content.remove();

// navegação no DOM

const lista = document.querySelector("#links ul")

lista.parentNode.style.backgroundColor = "green";

lista.children

for(list of lista.children){
    list.style.fontSize = "50px";
}

lista.firstElementChild.style.fontSize = "20px";

console.log("qual o elemento?", lista.parentNode);