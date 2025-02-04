'use strict' /*ajudar a manter a boa prática e não ter erros */

const cidades = [
    {nome: 'Jandira', cor: 'orange', icon: 'icon-jandira.png'},
    {nome: 'Barueri', cor: 'red', icon: 'icon-barueri.png'},
    {nome: 'Osasco', cor: 'purple', icon: 'icon-osasco.png'},
    {nome: 'Itapevi', cor: 'green', icon: 'icon-itapevi.png'},
    {nome: 'Sorocaba', cor: 'blue', icon: 'icon-sorocaba.png'}

]

const container = [
    {   nome: 'Jandira', 
        cor: 'orange', 
        icon: 'ponto-jandira.png', 
        descricao: 'O Jandira Plaza Shopping é o destino ideal para compras, lazer e gastronomia no coração de Jandira! '
    },
    {   nome: 'Barueri', 
        cor: 'red', 
        icon: 'ponto-barueri.png', 
        descricao: 'O Parque Shopping Barueri é o lugar ideal para quem busca conveniência, entretenimento e as melhores opções de compras em um só espaço! '
    },
    {   nome: 'Osasco', 
        cor: 'purple', 
        icon: 'ponto-osasco.webp',
        descricao: 'O Shopping União de Osasco é um dos maiores e mais completos da região, reunindo cinema, praça de alimentação e lazer para toda a família. '
    },
    {   nome: 'Itapevi', 
        cor: 'green', 
        icon: 'ponto-itapevi.jpg',
        descricao: 'O Ita Shopping Centro é o principal ponto de compras e lazer de Itapevi! '
    },
    {   nome: 'Sorocaba', 
        cor: 'blue', 
        icon: 'ponto-sorocaba.jpg',
        descricao: 'O Sorocaba Shopping é o primeiro shopping do interior de São Paulo, inaugurado em 1981.'
    }
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

function criarCards(card){
    const novoBloco = document.createElement('div')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novaDescricao = document.createElement('p')
    const container = document.getElementById('container')


    novaImagem.src = `./img/${card.icon}`

    novoTitulo.textContent = card.nome

    novaDescricao.textContent = card.descricao

    novoBloco.appendChild(novaImagem)
    novoBloco.appendChild(novoTitulo)
    novoBloco.appendChild(novaDescricao)

    container.appendChild(novoBloco)

}

cidades.forEach(criarMenu)
container.forEach(criarCards)







