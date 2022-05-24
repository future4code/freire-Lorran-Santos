// Exercício de interpretação de código

// 1 -
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a - O que vai ser impresso no console? Vai imprimir cada objeto do array seguido pelo número do seu index e o array completo

// 2 -
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB);
// a - O que vai ser impresso no console? Vai imprimir um array apenas com os nomes dos objetos

// 3 -
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// a - O que vai ser impresso no console? Vai imprimir o array removendo o objeto que tem o apelido Chijo, ficando apenas dois objetos no array

// Exercícios de escrita de código

// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// a - Crie um novo array que contenha apenas o nome dos doguinhos
// const nomePets = pets.map((item) => {
//   return item.nome;
// });
// console.log(nomePets);

// b -  Crie um novo array apenas com os cachorros salsicha
// const cachorrosSalsicha = pets.filter((item) => {
//   if (item.raca === "Salsicha") {
//     return item;
//   }
// });
// console.log(cachorrosSalsicha);

// c - Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
// const poodles = pets.filter((item) => {
//   if (item.raca === "Poodle") {
//     return item;
//   }
// });

// const mensagemClientes = poodles.map((item) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`;
// });

// console.log(mensagemClientes);

// 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
// ];

// a - Crie um novo array que contenha apenas o nome de cada item
// const nomes = produtos.map((item) => {
//   return item.nome;
// });
// console.log(nomes);

// b - Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// const nomePreco = produtos.map((item) => {
//   const procentagem = item.preco * 0.05;
//   const desconto = item.preco - procentagem;
//   return `${item.nome} ${desconto}`;
// });
// console.log(nomePreco);

// c - Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const bebidas = produtos.filter((item) => {
//   if (item.categoria === "Bebidas") {
//     return item;
//   }
// });
// console.log(bebidas);

// d - Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// const ype = produtos.filter((item) => {
//   if (item.nome.includes("Ypê")) {
//     return item;
//   }
// });
// console.log(ype);

// e - Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// const fraseYpe = ype.map((item) => {
//   return `Compre ${item.nome} por ${item.preco}`;
// });
// console.log(fraseYpe);

// DESAFIO
// 1 - Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a - Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const ordem = pokemons.map((item) => {
  return item.nome;
});
console.log(ordem.sort());

// b - Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tipos = pokemons.map((item) => {
  return item.tipo;
});
const tiposSemRepetir = tipos.filter((item, index) => {
  return tipos.indexOf(item) === index;
});
console.log(tiposSemRepetir);

