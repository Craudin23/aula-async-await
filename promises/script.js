
function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperar aqui')
            resolve()
        }, 1000);

    })

}
async function segundaFuncao() {
    console.log('iniciou')
    await primeiraFuncao()
    console.log('terminou')
}

segundaFuncao()

//pratica

function getUser(id){
    return fetch(`http://reqres.in/apiusers/?id=${id}`)
    .then(data => data.json())
    .then(data => data.json(err))
}
async function showUsername(id){
    const user = await getUser(id)
    console.log(`o nome do usuario e:${user.data.fist_name}`)
}
showUserName(10)