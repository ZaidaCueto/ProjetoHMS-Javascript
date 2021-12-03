
//pegar o input
//se for sim, mostra categorias disponiveis, pergunta qual categoria ela escolhe
//se não, mostra todos os livros em ordem crecente pela quantidade de páginas
const  livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('deseja buscar um libro?S/N')

if (entradaInicial.toLocaleUpperCase() === ('S')) {
    console.log('essas são as categorias disponiveis:')
    console.log('Produtividade ', '/Historias brasileira','/Américas','/Estilo de vida', '/Tecnologia ')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    
    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis')
    console.table(livrosOrdenados)
}


