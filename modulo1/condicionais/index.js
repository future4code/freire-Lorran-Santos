// Exercícios de interpretação

// 1 -
// const respostaDoUsuario = prompt("Digite o número que você quer testar");
// const numero = Number(respostaDoUsuario);

// if (numero % 2 === 0) {
//   console.log("Passou no teste.");
// } else {
//   console.log("Não passou no teste.");
// }

// a - Explique o que o código faz. Qual o teste que ele realiza? Está testando para ver se o número digitado pelo usuário é par ou não

// b - Para que tipos de números ele imprime no console "Passou no teste"? Para todos os números divisiveis por 2

// c - Para que tipos de números a mensagem é "Não passou no teste"?  Para os números que não são divisiveis por 2

// 2 - 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta");
// let preco;
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5;
//     break;
//   case "Maçã":
//     preco = 2.25;
//     break;
//   case "Uva":
//     preco = 0.3;
//     break;
//   case "Pêra":
//     preco = 5.5;
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5;
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

// a - Para que serve o código acima?
// Mostra o preço de acordo com a fruta digitada pelo usuário

// b - Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta Maçã é R$ 2.25

// c - Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta Pêra é R$ 5. Porque sem o break ele para no default.

// 3 -
// const numero = Number(prompt("Digite o primeiro número."));

// if (numero > 0) {
//   console.log("Esse número passou no teste");
//   let mensagem = "Essa mensagem é secreta!!!";
// }

// console.log(mensagem);

// a - O que a primeira linha está fazendo?
// A primeira linha pede para o usuário digitar um número, converte de string para número e guarda o que foi digitado na variável "numero"

// b - Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se for 10 ele vai exibir a mensagem "Esse número passou no teste". Se for -10 ele vai dar erro.

// c - Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Haverá erro porque a mensagem não foi definida, dentro do bloco do if não foi definido nenhum parâmetro para ser executada a variável mensagem.

// Exercícios de escrita de código

// 1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a - Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b - Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
// c - Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// const usuario = {};
// const nomeUsuario = prompt("Digite seu nome: ");
// const idadeUsuario = +prompt("Digite a sua idade: ");
// usuario.nome = nomeUsuario;
// usuario.idade = idadeUsuario;

// const podeDirigir = () => {
//   if (usuario.idade >= 18) {
//     console.log("Você pode dirigir!");
//   } else {
//     console.log("Você não pode dirigir");
//   }
// };

// podeDirigir();

// 2 - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const checarTurno = () => {
//   const turno = prompt(
//     "Digite o turno que você estuda (M, V, ou N): "
//   ).toLowerCase();
//   if (turno === "m") {
//     console.log("Bom Dia!");
//   } else if (turno === "v") {
//     console.log("Boa Tarde!");
//   } else {
//     console.log("Boa Noite!");
//   }
// };

// checarTurno();

// const turno = prompt(
//   "Digite o turno que você estuda (M, V, ou N): "
// ).toLowerCase();

// switch (turno) {
//   case "m":
//     console.log("Bom Dia!");
//     break;
//   case "v":
//     console.log("Boa Tarde!");
//     break;
//   case "n":
//     console.log("Boa Noite");
//     break;

//   default:
//     console.log("Favor digitar um turno válido");
//     break;
// }

// 4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const filme = {};
// const generoFilme = prompt("Digite o gênero do filme: ").toLowerCase();
// const precoFilme = +prompt("Digite o preco do ingresso: ");
// filme.genero = generoFilme;
// filme.preco = precoFilme;

// const verificarFilme = () => {
//   if (filme.genero === "fantasia" && filme.preco < 15) {
//     console.log("Bom Filme!!");
//   } else {
//     console.log("Escolha outro filme");
//   }
// };

// verificarFilme();

// DESAFIOS

// 1 - Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// const filme = {};
// const generoFilme = prompt("Digite o gênero do filme: ").toLowerCase();
// const precoFilme = +prompt("Digite o preco do ingresso: ");
// filme.genero = generoFilme;
// filme.preco = precoFilme;

// const verificarFilme = () => {
//   if (filme.genero === "fantasia" && filme.preco < 15) {
//     const lanche = prompt("Qual lanche vai comprar para acompanhar o filme?");
//     console.log(`Bom Filme!! Aproveite o seu ${lanche}`);
//   } else {
//     console.log("Escolha outro filme");
//   }
// };

// verificarFilme();

// 2 - 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

const nomeCompleto = prompt("Digite o seu nome completo: ");
const tipoDoJogo = prompt(
  "Qual o tipo de jogo IN (Internacional) ou DO (Doméstico):"
);
const etapaDoJogo = prompt(
  "Qual etapa do jogo SF (Semifinal), DT (Decisão de terceiro lugar) ou FI (Final):"
);
let categoria = prompt("Qual a categoria (1, 2, 3 ou 4):");
let quantidadeIngressos = +prompt("Quantos ingressos são? ");

let valor;
let moeda;
let valorTotal;

if (etapaDoJogo === "SF") {
  if (categoria === "1") {
    valor = 1320;
  } else if (categoria === "2") {
    valor = 880;
  } else if (categoria === "3") {
    valor = 550;
  } else if (categoria === "4") {
    valor = 220;
  }
}
if (etapaDoJogo === "DT") {
  if (categoria === "1") {
    valor = 660;
  } else if (categoria === "2") {
    valor = 440;
  } else if (categoria === "3") {
    valor = 330;
  } else if (categoria === "4") {
    valor = 170;
  }
}
if (etapaDoJogo === "FI") {
  if (categoria === "1") {
    valor = 1980;
  } else if (categoria === "2") {
    valor = 1320;
  } else if (categoria === "3") {
    valor = 880;
  } else if (categoria === "4") {
    valor = 330;
  }
}
if (tipoDoJogo === "IN") {
  moeda = "U$";
  valor = valor * 4.1;
  valorTotal = valor * quantidadeIngressos;
} else {
  moeda = "R$";
  valorTotal = valor * quantidadeIngressos;
}

console.log(`
---Dados da Compra
Nome do Cliente: ${nomeCompleto}
Tipo do jogo: ${tipoDoJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeIngressos}
---Valores---
Valor do Ingresso: ${valor}
Valor total: ${valorTotal}`);
