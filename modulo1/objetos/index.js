// Exercícios de interpretação de código

// 1 - Leia o código

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) //"Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) // {canal: "Globo", horario: "14h"}

// 2 - Leia o código

// const cachorro = {
//   nome: "Juca",
//   idade: 3,
//   raca: "SRD",
// };

// const gato = { ...cachorro, nome: "Juba" };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

// console.log(cachorro); // {nome: "Juca", idade: 3, raca: "SRD"}
// console.log(gato); // {nome: "Juba", idade: 3, raca: "SRD"}
// console.log(tartaruga); // {nome: "Jubo", idade: 3, raca: "SRD"}

// b - Faz um espelhamento de um objeto ou Array, possibilitando alterar apenas uma propriedade específica e economizando tempo

// 3 - Leia o código
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // false
// console.log(minhaFuncao(pessoa, "altura")) // undefined
// b - Explique o valor impresso no console. Você sabe por que isso aconteceu?
// false é o valor da propriedade backender e undefined pois não foi definido nenhum valor

// 1 - Exercícios de escrita de código
// a - Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// const pessoa = {
//   nome: "Amanda",
//   apelidos: ["Amandinha", "Mandinha", "Mandi"],
// };

// const frase = (pessoa) => {
//   console.log(
//     `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
//   );
// };

// frase(pessoa);

// b - Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novoObjeto = (pessoa) => {
//   const novosApelidos = {
//     ...pessoa,
//     apelidos: ["Dinha", "Amandi", "Amandazinha"],
//   };
//   console.log(
//     `Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`
//   );
// };

// novoObjeto(pessoa);

// 2 - Resolva os passos a seguir:
// a - Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
const pessoa1 = {
  nome: "Lorran",
  idade: 22,
  profissao: "Estudante",
};

const pessoa2 = {
  nome: "João",
  idade: 31,
  profissao: "Dev Front End",
};

// b - Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

const minhaFuncao = (pessoa) => {
  const novaPessoa = {
    ...pessoa,
  };
  console.log([
    novaPessoa.nome,
    novaPessoa.nome.length,
    novaPessoa.idade,
    novaPessoa.profissao,
    novaPessoa.profissao.length,
  ]);
};

minhaFuncao(pessoa1);
minhaFuncao(pessoa2);

// 3 - Resolva os passos a seguir:
// a - Crie uma variável de escopo global que guarde um array vazio chamada carrinho
let carrinho = [];
// b - Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
const frutasSacolao1 = {
  nome: "banana",
  disponibilidade: true,
};

const frutasSacolao2 = {
  nome: "laranja",
  disponibilidade: true,
};

const frutasSacolao3 = {
  nome: "bergamota",
  disponibilidade: true,
};

// c - Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.
const funcaoFrutas = (fruta) => {
  const frutas = {
    ...fruta,
  };
  carrinho.push(frutas);
  return carrinho
};
funcaoFrutas(frutasSacolao1);
funcaoFrutas(frutasSacolao2);
funcaoFrutas(frutasSacolao3);

// d - Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
console.log(carrinho);