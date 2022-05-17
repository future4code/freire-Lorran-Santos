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

const filme = {};
const generoFilme = prompt("Digite o gênero do filme: ").toLowerCase();
const precoFilme = +prompt("Digite o preco do ingresso: ");
filme.genero = generoFilme;
filme.preco = precoFilme;

const verificarFilme = () => {
  if (filme.genero === "fantasia" && filme.preco < 15) {
    console.log("Bom Filme!!");
  } else {
    console.log("Escolha outro filme");
  }
};

verificarFilme();
