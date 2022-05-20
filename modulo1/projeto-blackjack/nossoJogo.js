/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo Blackjack!");

// Inicio de jogo

const iniciarJogo = confirm(`Deseja iniciar o jogo?`);

// Variaveis para guardar as cartas do usuario e somar os seus valores

const cartaUsuario = comprarCarta();
const cartaUsuario2 = comprarCarta();
const somaCartasUsuario = `${cartaUsuario.valor + cartaUsuario2.valor}`;

// Variaveis para guardar as cartas do computador e somar os seus valores

const cartaComputador = comprarCarta();
const cartaComputador2 = comprarCarta();
const somaCartasComputador = `${
  cartaComputador.valor + cartaComputador2.valor
}`;

//condicionais

if (iniciarJogo) {
  console.log(
    `Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - a sua pontuação é ${somaCartasUsuario}`
  );
  console.log(
    `Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - a sua pontuação é ${somaCartasComputador}`
  );

  if (somaCartasUsuario > somaCartasComputador) {
    console.log("O usuário ganhou!!");
  } else if (somaCartasUsuario < somaCartasComputador) {
    console.log("O Computador ganhou!");
  } else {
    console.log("Empatou!!!");
  }
} else {
  console.log("Fim de jogo!");
}
