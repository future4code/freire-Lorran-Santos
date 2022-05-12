// Exercícios de interpretação de código
// 1 - Leia o código abaixo

// function minhaFuncao(variavel) {
//   return variavel * 5;
// }

// console.log(minhaFuncao(2));
// console.log(minhaFuncao(10));

// a - O que vai ser impresso no console?
// "10" que é a multiplicação 2 * 5 e 50 que é a multiplicação de 10 * 5

// b - O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// não vai aparecer nada no console pois não existe nada pedindo para imprimir a informação.

// 2 - Leia o código abaixo
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);

// a - Explique o que essa função faz e qual é sua utilidade
// Ele checa a frase para ver se tem a sequencia de carcteres "cenoura", se tiver rtorna true no console, senão retorna "false"

// b - Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i. Eu gosto de cenoura // true
// ii. CENOURA é bom pra vista // true
// iii. Cenouras crescem na terra // true

// Exercícios de escrita de código

// 1 - Escreva as funções explicadas abaixo:
// a - A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
// function informacoesMinhas() {
//   console.log(
//     "Eu sou Lorran, tenho 23 anos, moro em Cachoeirinha e sou estudante."
//   );
// }
// informacoesMinhas();

// b - Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// function informacoesDoUsuario(nome, idade, cidade, profissao) {
//   const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
//   return frase;
// }

// const fraseCompleta = informacoesDoUsuario(
//   "Lorran",
//   22,
//   "Cachoeirinha",
//   "estudande"
// );
// console.log(fraseCompleta);

// 2 - Escreva as funções explicadas abaixo:
// a - Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
// const somar = (n1, n2) => {
//   const soma = n1 + n2;
//   return soma;
// };
// const conta = somar(2, 5);
// console.log(conta);

// b - Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
// function validarMaior(num1, num2) {
//   const maiorIgual = num1 >= num2;
//   return `O primeiro número é maior ou igual? ${maiorIgual}.`;
// }
// console.log(validarMaior(6, 2));

// c - Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
// const validarPar = (n1) => {
//   const validacaoPar = n1 % 2;
//   return validacaoPar === 0;
// };
// console.log(validarPar(4));

// d - Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
// function receberMensagem(texto) {
//   const textoTamanho = texto.length;
//   const textoMaiusculo = texto.toUpperCase();
//   console.log(`${textoTamanho} ${textoMaiusculo}`);
// }
// receberMensagem("Olá Mundo!");

// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
const somar = (n1, n2) => {
  let soma = n1 + n2;
  return soma;
};

const subtrair = (n1, n2) => {
  let subtrai = n1 - n2;
  return subtrai;
};

const multiplicar = (n1, n2) => {
  let multiplica = n1 * n2;
  return multiplica;
};

const dividir = (n1, n2) => {
  let dividi = n1 / n2;
  return dividi;
};

const numero1 = Number(prompt("Digite um número: "));
const numero2 = Number(prompt("Digite outro número: "));

console.log(`As quatro operações são:
soma: ${somar(numero1, numero2)}
subtração: ${subtrair(numero1, numero2)}
multiplicação: ${multiplicar(numero1, numero2)}
divisão: ${dividir(numero1, numero2)}`);

// DESAFIO

// 1 - Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
// a - Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
// const imprimir = (texto) => {
//   console.log(texto);
// };
// imprimir("Olá Mundo");

// b - Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo.
// const somar = (n1, n2) => n1 + n2;
// imprimir(somar(5, 2));

// 2 - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.
// const pitagorasHipotenusa = (ca, co) => {
//   let catetoAdjacente = ca ** 2;
//   let catetoOposto = co ** 2;
//   let resultado = catetoAdjacente + catetoOposto;
//   const hipotenusa = Math.sqrt(resultado);
//   return hipotenusa;
// };
// console.log(pitagorasHipotenusa(4, 3));
