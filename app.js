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

const produtos = [
    {   nome: 'Jandira', 
        cor: 'orange', 
        icon: 'ponto-jandira.png', 
        descricao: 'O Jandira Plaza Shopping é o destino ideal lazer e gastronomia no coração de Jandira! ',
        preco: 'R$ 20.000',
        avaliacao: 3
    },
    {   nome: 'Barueri', 
        cor: 'red', 
        icon: 'ponto-barueri.png', 
        descricao: 'O Shopping Tamboré Barueri é o lugar ideal para quem busca conveniência e diversão! ',
        preco: 'R$ 70.000',
        avaliacao: 4
    },
    {   nome: 'Osasco', 
        cor: 'purple', 
        icon: 'ponto-osasco.webp',
        descricao: 'O Shopping União de Osasco é um dos maiores e mais completos da região!',
        preco: 'R$ 100.000',
        avaliacao: 5
    },
    {   nome: 'Itapevi', 
        cor: 'green', 
        icon: 'ponto-itapevi.jpg',
        descricao: 'O Ita Shopping Centro é o principal ponto de compras, lazer e diversão de Itapevi! ',
        preco: 'R$ 35.000',
        avaliacao: 3
    },
    {   nome: 'Sorocaba', 
        cor: 'blue', 
        icon: 'ponto-sorocaba.jpg',
        descricao: 'O Sorocaba Shopping é o primeiro shopping do interior de São Paulo, desde 1981.',
        preco: 'R$ 150.000',
        avaliacao: 5
    }
]

function criarCards(card){
    const container = document.getElementById('container')
    const novoBloco = document.createElement('div')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novaDescricao = document.createElement('p')
    const novoPreco = document.createElement("span")
    const novaAvaliacao = document.createElement('h2')
    const novoBotao = document.createElement('button')
    novoBloco.classList.add('novoBloco')

    // Acresecentando informações 
    novaImagem.src = `./img/${card.icon}`
    novoTitulo.textContent = card.nome
    novaDescricao.textContent = card.descricao
    novoPreco.textContent = card.preco

    // Acrescentar as estrelas
    // repeat -> Faz repetir até dar o número que está nas avaliações 
    // 5 - Faz com que no total fique cinco estrelas mesmo não sendo a avaliação
    novaAvaliacao.textContent = `${'★'.repeat(card.avaliacao)}${'☆'.repeat(5 - card.avaliacao)}`
    novaAvaliacao.style = `--cor-hover: ${card.cor}`
    novoBotao.textContent = "Adquira Já"
    novoBotao.style = `--cor-hover: ${card.cor}`
    novoBloco.style = `--cor-hover: ${card.cor}`

    

    novoBloco.appendChild(novaImagem)
    novoBloco.appendChild(novoTitulo)
    novoBloco.appendChild(novaDescricao)
    novoBloco.appendChild(novoPreco)
    novoBloco.appendChild(novaAvaliacao)
    novoBloco.appendChild(novoBotao)

    container.appendChild(novoBloco)

}

cidades.forEach(criarMenu)
produtos.forEach(criarCards)







