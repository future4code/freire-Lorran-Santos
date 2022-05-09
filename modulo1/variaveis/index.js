// Exercícios de interpretação de código

// Exercício 1
// let a = 10
// let b = 10

// console.log(b) // 10

// b = 5
// console.log(a, b) // 10 5

// Exercício 2
// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c) // 10 10 10

// Ecercício 3

// let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
// let salarioDiario = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${salarioDiario/horasTrabalhadasDia} por hora`)

// Exercícios de escrita de código

// Exercício 1
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
// undefined porque não foi atribuído nenhum valor para as variáveis

nome = prompt("Qual é o seu nome? ");
idade = prompt("Qual é a sua idade? ");
console.log(nome, idade);
console.log(typeof nome);
console.log(typeof idade);
// tanto a variável nome quanto idade se tornaram strings
console.log("Olá", nome, "você tems", idade, "anos.");

// Exercício 2
let corDaRoupa = "Você está usando roupa preta hoje?";
let chuva = "Está chovendo onde você mora?";
let sabeFalarIngles = "Você sabe falar inglês?";

let respostaCor = "SIM";
let respostaChuva = "SIM";
let respostaIngles = "SIM";

console.log(corDaRoupa, respostaCor);
console.log(chuva, respostaChuva);
console.log(sabeFalarIngles, respostaChuva);

// Exercício 3
let a = 10;
let b = 25;
c = b;
b = a;
a = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de a é", b);

// DESAFIO

let numero1 = prompt("Digite um número: ");
let numero2 = prompt("Digite outro número: ");

let convercao1 = parseInt(numero1, 10);
let convercao2 = parseInt(numero2, 10);

let soma = convercao1 + convercao2;
let multiplicacao = convercao1 * convercao2;

console.log(soma);
console.log(multiplicacao);
