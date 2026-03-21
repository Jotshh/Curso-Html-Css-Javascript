// https://jsonplaceholder.typicode.com/
// Free fake and reliable API for testing and prototyping.

// REQUISICAO DO TIPO GET

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts)=> {
//         console.log(posts);
//         const container = document.querySelector("#container")
//         posts.map(post => {
//             console.log(post.title)
//             const h2 = document.createElement("h2")
//             h2.textContent = post.title
//             container.appendChild(h2)
//         })
//     })

//  REQUISICAO DO TIPO POST

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'TITULO',
    body: 'OI, CORPO DO POST',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//  REQUISICAO DO TIPO PUT

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'TROCANDO TITULO',
    body: 'TROCANDO CORPO',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//  REQUISICAO DO TIPO PATCH

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'TROCANDO SOMENTE O TITULO',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));