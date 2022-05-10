// Exercícios de Interpretação

//Exercício 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // false, pois só vai mostrar true caso 'bool1' e 'bool2' sejam true

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // false, porque ele depende de todos os --bools-- serem true, e o 'bool2' é false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // true, porque 'resultado' era false '!resultado' fica true, 'bool1' é true também

// console.log("d. ", typeof resultado) // boolean, porque o valor de 'resultado' é um booleano

// Exercício 2
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero // deve ser convertido as variáveis 'primeiroNumero' e 'segundoNumero'

// console.log(soma)

// Exercício 3
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// console.log(soma)

// Exercícios de escrita de código
// Exercício 1
// const idadeUsuario = Number(prompt('Qual é a sua idade? '));
// const idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo? '));
// console.log('Sua idade é maior do que a do seu amigo? ', idadeUsuario > idadeMelhorAmigo);
// console.log('A diferença de idade entre vocês é de: ', idadeUsuario - idadeMelhorAmigo);
// console.log(typeof idadeUsuario);
// console.log(typeof idadeMelhorAmigo);

// Exercício 2
// const numeroPar = Number(prompt('Insira um número par: '));
// console.log('A divisão de',numeroPar, "por 2, é de:", numeroPar % 2); // todo numero par tem o resultado de modulo por 2 de 0
// // todo numero impar resulta em 1
// console.log(typeof numeroPar);

// Exercício 3 
// const idadeUsuario = Number(prompt('Qual a sua idade? '));


// console.log('A sua idade em meses é de:', idadeUsuario * 12, 'Meses');
// console.log('A sua idade em meses é de:', idadeUsuario * 365, 'Dias');
// console.log('A sua idade em meses é de:', idadeUsuario * 8760, 'Horas');

// Exercício 4
const num1 = Number(prompt('Digite um número: '));
const num2 = Number(prompt('Digite outro número: '));

const primeiroPeloSegundo = num1 % num2;
const segundoPeloPrimeiro = num2 % num1;

console.log('O primeiro numero é maior que segundo?', num1 > num1);
console.log('O primeiro numero é igual ao segundo?', num1 === num2);
console.log('O primeiro numero é divisível pelo segundo?', primeiroPeloSegundo === 0);
console.log('O segundo numero é divisível pelo primeiro?', segundoPeloPrimeiro === 0);
