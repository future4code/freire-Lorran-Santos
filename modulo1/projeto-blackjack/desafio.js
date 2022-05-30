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

// início
const inicioDeJogo = confirm(
  "Bem vindo ao Blackjack" + "\n" + "Deseja iniciar uma partida?"
);

// jogadores
let usuario = [];
let computador = [];

if (inicioDeJogo) {
  usuario.push(comprarCarta());
  usuario.push(comprarCarta());
  computador.push(comprarCarta());
  computador.push(comprarCarta());
  while (
    (usuario[0].valor === 11 && usuario[1].valor === 11) ||
    (computador[0].valor === 11 && computador[1].valor === 11)
  ) {
    usuario = [];
    computador = [];
    usuario.push(comprarCarta());
    usuario.push(comprarCarta());
    computador.push(comprarCarta());
    computador.push(comprarCarta());
  }
}

confirm(
  `Suas cartas são ${usuario[0].texto} ${usuario[1].texto}` +
    "\n" +
    `A carta revelada do computador é ${computador[0].texto}`
);
