'use strict' /*ajudar a manter a boa prática e não ter erros */

const cidades = [
    {nome: 'Jandira', cor: 'orange', icon: 'icon-jandira.png'},
    {nome: 'Barueri', cor: 'red', icon: 'icon-barueri.png'},
    {nome: 'Osasco', cor: 'purple', icon: 'icon-osasco.png'},
    {nome: 'Itapevi', cor: 'green', icon: 'icon-itapevi.png'},
    {nome: 'Sorocaba', cor: 'blue', icon: 'icon-sorocaba.png'}

]

function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novaImagem.src = `./img/${cidade.icon}`

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    /* appendChild -> Insere um novo item dentro de algo */
    menu.appendChild(novoItem)
}

cidades.forEach(criarMenu)







