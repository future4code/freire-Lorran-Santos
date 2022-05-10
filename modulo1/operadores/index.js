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
// const num1 = Number(prompt('Digite um número: '));
// const num2 = Number(prompt('Digite outro número: '));

// const primeiroPeloSegundo = num1 % num2;
// const segundoPeloPrimeiro = num2 % num1;

// console.log('O primeiro numero é maior que segundo?', num1 > num1);
// console.log('O primeiro numero é igual ao segundo?', num1 === num2);
// console.log('O primeiro numero é divisível pelo segundo?', primeiroPeloSegundo === 0);
// console.log('O segundo numero é divisível pelo primeiro?', segundoPeloPrimeiro === 0);

// DESAFIO 1

// console.log('a - Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também:')
// const fa1 = 77;
// const fa1K = (fa1 - 32) * (5 / 9) + 273.15;
// console.log('O valor é', fa1K + 'K');

// console.log('b - Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também:');;
// const ce1 = 80;
// const ce1F = (ce1) * (9 / 5) + 32;
// console.log('O valor é', ce1F + '°F');

// console.log('c - Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também:');
// const ce2 = 30;
// const ce2F = (ce2) * (9 / 5) + 32;
// const ce2K = (ce2F - 32) * (5 / 9) + 273.15;
// console.log('O valor é', ce2F + '°F');
// console.log('O valor é', ce2K + 'K');

// console.log('d - Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter:')
// const inserirNumero = Number(prompt('Insira uma temperatura em Celcius: '))
// const converterF = (inserirNumero) * (9 / 5) + 32;
// const converterK = (converterF - 32) * (5 / 9) + 273.15;

// console.log('A temperatura', inserirNumero + '°C convertida para Fahrenheit fica:', converterF);
// console.log('E convertida para Kelvin fica:', converterK);

console.log("---------------------------------------------------------");

// DESAFIO 2

// const quilowattHora = 0.05;
// console.log('a - Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora')
// const quillowattResidencia = Number(prompt('Digite a quantidades de quilowatts consumida pela sua residência: '));
// const calculoKwh = quillowattResidencia * quilowattHora;
// console.log('O consumo é de: R$', calculoKwh, 'por hora.');

// console.log('b - Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto');
// const desconto = calculoKwh * 0.15;
// const descontoKwh = calculoKwh - desconto;
// console.log('o seu desconto de 15% é de R$', desconto + '. O total fica: R$', descontoKwh + '.');

// console.log('---------------------------------------------------------');

// DESAFIO 3
console.log(
  "a - Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:"
);
const lb = 20;
const lbParaKg = lb / 2.205;
console.log("O valor fica:", lbParaKg + "kg");

console.log(
  "b - Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: "
);
const oz = 10.5;
const ozParaKg = oz / 35.274;
console.log("O valor fica:", ozParaKg + "kg.");

console.log(
  "c - Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: "
);
const mi = 100;
const miParaM = mi * 1609;
console.log("O valor fica:", miParaM + "m.");

console.log(
  "d - Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: "
);
const ft = 50;
const ftParaM = ft / 3.281;
console.log("O valor fica:", ftParaM + "m.");

console.log(
  "e - Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: "
);
const gal = 103.56;
const galParaL = gal * 3.785;
console.log("O valor fica:", galParaL + "l.");

console.log(
  "f - Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: "
);
const xic = 450;
const xicPataL = xic * 28.413;
console.log("O valor fica:", xicPataL + "l.");

console.log(
  "g - Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter"
);
const valor = Number(prompt("Digite seu peso em kg: "));
const valorParaLibra = valor * 2.205;
console.log("Você tem:", valorParaLibra + "lb.");