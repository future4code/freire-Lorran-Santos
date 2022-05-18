// Exercìcio de interpretação

// 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) // vai imprimir 10 porque ele vai somando 1 até o valor de 5, e depois soma o valor o i que é 5 dando um total de 10

// 2 - Leia o código abaixo
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero);
//   }
// }
// a - A variável número vai guardar e imprimir todos os números maiores que 18 do array
// b - Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso? Sim.
// for (let numero of lista) {
//   console.log(numero);
// }

// 3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Se o usuario digitar 4 vai ser impresso no console 4 linhas começando na primeira linha com um * e cada linha adicionaria um * a mais:
// *
// **
// ***
// ****

// Exercício de escrita

// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// const quantidadeAnimaisEstimacao = Number(
//   prompt("Quantos animais de estimação você tem?")
// );
// a - Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b - Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// let nomes = [];
// if (quantidadeAnimaisEstimacao === 0) {
//   console.log("Que pena! Você pode adotar um pet");
// } else {
//   for (let i = 0; i < quantidadeAnimaisEstimacao; i++) {
//     let digiteNomes = prompt("Digite o nome deles um por um: ");
//     nomes.push(digiteNomes);
//   }
// }
// c - Por fim, imprima o array com os nomes dos bichinhos no console
// console.log(nomes);

// 2 -Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a - Escreva um programa que imprime cada um dos valores do array original.
console.log("Resposta a:");
const cadaLinha = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
cadaLinha(arrayOriginal);

// b - Escreva um programa que imprime cada um dos valores do array original divididos por 10
// console.log("Resposta b:");
// const dividir = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i] / 10);
//   }
// };
// dividir(arrayOriginal);

// c - Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
console.log("Resposta c:");
const numerosPares = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};
numerosPares(arrayOriginal);

// d - Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
// console.log("Resposta d:");
// const arrayString = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`O elemento index ${i} é: ${array[i]}`);
//   }
// };
// arrayString(arrayOriginal);

// e - Escreva um programa que imprima no console o maior e o menor números contidos no array original
// console.log("Resposta e:");
// let maior = 0;
// let menor = 1000;
// const maiorMenor = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maior) {
//       maior = array[i];
//     }
//     if (array[i] < menor) {
//       menor = array[i];
//     }
//   }
//   console.log(maior);
//   console.log(menor);
// };

// maiorMenor(arrayOriginal);

// DESAFIO

// 1 - 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.
// Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
// Um resumo das funcionalidades são:

// a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
const digiteUmNumero = Number(prompt("Digite um número para começar:"));
console.log("Vamos Jogar!!");

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
let chutes = "";
for (let i = 0; i !== digiteUmNumero; i++) {
  chutes = Number(prompt("Chute um número"));
  if (chutes > digiteUmNumero) {
    console.log(`O número chutado foi: ${chutes}`);
    console.log(`Errou!!! O número escolhido é maior que a resposta`);
  } else if (chutes < digiteUmNumero) {
    console.log(`O número chutado foi: ${chutes}`);
    console.log(`Errou!!! O número escolhido é menor que a resposta`);
  }
}

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
