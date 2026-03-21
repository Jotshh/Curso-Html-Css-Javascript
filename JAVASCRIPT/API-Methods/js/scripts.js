// https://jsonplaceholder.typicode.com/
// Free fake and reliable API for testing and prototyping.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts)=> {
        console.log(posts);
        const container = document.querySelector("#container")
        posts.map(post => {
            console.log(post.title)
            const h2 = document.createElement("h2")
            h2.textContent = post.title
            container.appendChild(h2)
        })
    })