// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo: "));
  const largura = Number(prompt("Digite a largura do retângulo: "));
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual: "));
  const anoDeNascimento = Number(prompt("Digite o ano que você nasceu: "));
  console.log(anoAtual - anoDeNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Digite o seu nome: ");
  const idadeUsuario = prompt("Digite a sua idade: ");
  const emailUsuario = prompt("Digite seu email: ");
  console.log(
    `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita: ");
  const cor2 = prompt("Digite outra cor favorita: ");
  const cor3 = prompt("Digite mais uma cor favorita: ");
  const arrayCores = [];
  arrayCores.push(cor1, cor2, cor3);
  console.log(arrayCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string;
  return stringMaiuscula.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultado = custo / valorIngresso;
  return resultado;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparacao = string1.length === string2.length;
  return comparacao;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const array1 = array;
  return array1[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const arrayElementos = array.length;
  const ultimoElemento = arrayElementos - 1;
  return array[ultimoElemento];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimoElemento = array[array.length - 1];
  let primeiroElemento = array[0];
  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let palavra1 = string1.toUpperCase();
  let palavra2 = string2.toUpperCase();
  let validar = palavra1 == palavra2;
  return validar;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual: "));
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento: "));
  const anoCarteiraIdentidade = Number(
    prompt("Em qual ano você fez a sua identidade: ")
  );
  const idade = anoAtual - anoDeNascimento;
  const tempoRg = anoAtual - anoCarteiraIdentidade;
  const menorVinte = idade <= 20 && tempoRg >= 5;
  const menorCinquenta = idade > 20 && idade <= 50 && tempoRg >= 10;
  const maiorCinquenta = idade > 50 && tempoRg >= 15;

  console.log(menorVinte || menorCinquenta || maiorCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let multiploQuatro = ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0);
  return multiploQuatro;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idadeUsuario = prompt("Qual é a sua idade? ");
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? ");
  const disponibilidadeHorario = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso? "
  );
  const podeFazerLabenu =
    idadeUsuario == "sim" &&
    ensinoMedioCompleto == "sim" &&
    disponibilidadeHorario == "sim";
  console.log(podeFazerLabenu);
}
