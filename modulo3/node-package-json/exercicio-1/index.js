const name = process.argv[2];
const age = process.argv[3];
const ageSeven = parseInt(age) + 7;

console.log(
  `Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${ageSeven}`
);
