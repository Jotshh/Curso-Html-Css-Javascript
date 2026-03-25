    //  fetch pegando dados do github

    function fetchGitHubUser(username) {
    
        fetch(`https://api.github.com/users/${username}`)
            .then((response) =>{
                if(!response.ok){
                    console.log(error)
                }
                return response.json()
            })
            .then((user) => {
                console.log("user", user)
                createUserCard(user)
            })
            .catch((error) => {
                console.log(error)
                const app = document.getElementById("app")
                app.innerHTML = `<p style="color:red">Erro: ${error.message}</p>`
            })

    }

//  funcao para criar o card do usuario

function createUserCard(user) {
    const app = document.getElementById("app")

    const card = document.createElement("div")
    card.className = "card"

    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`
    
    const name = document.createElement("h2")
    name.textContent = user.name

    const login = document.createElement("p")
    login.textContent = `@${user.login}`

    const bio = document.createElement("p")
    bio.textContent = user.bio

    const descricao = document.createElement("p")
    descricao.innerHTML = `<br><p>Uma página feita para Estudar o Html - Css e Javascript: </p>`
    

    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)
    card.appendChild(bio)
    card.appendChild(descricao)
    app.appendChild(card)
}

fetchGitHubUser("Jotshh")


