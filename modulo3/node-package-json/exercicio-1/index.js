const name = process.argv[2];
const age = Number(process.argv[3]);
const ageSeven = age + 7;

if (process.argv[2] && process.argv[3]) {
  console.log(
    `Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${ageSeven}`
  );
} else if (process.argv[2] === undefined) {
  console.log(
    '%cDesculpe mas sem parâmetros não posso fazer muito. Por favor, preencha os parâmetros!',
    'background: #ff0000; color: #ffffff'
  );
} else if (process.argv[3] === undefined) {
  console.log(
    '%cOps... Acho que você esqueceu de colocar algum parâmetro!',
    'background: #ff0000; color: #000000'
  );
}
