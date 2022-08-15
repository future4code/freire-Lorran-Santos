if (process.argv[2] === undefined) {
  console.log('Por favor, coloque os parâmetros a serem seguidos');
} else if (process.argv[3] === undefined) {
  console.log('Preencha os valores a serem calculados');
} else if (process.argv[4] === undefined) {
  console.log('Ops... Faltou um valor');
} else if (process.argv[2] === 'add') {
  const result = Number(process.argv[3]) + Number(process.argv[4]);
  console.log(`A soma é ${result}`);
} else if (process.argv[2] === 'sub') {
  const result = Number(process.argv[3]) - Number(process.argv[4]);
  console.log(`A subtração é ${result}`);
} else if (process.argv[2] === 'mult') {
  const result = Number(process.argv[3]) * Number(process.argv[4]);
  console.log(`A multiplicação é ${result}`);
} else if (process.argv[2] === 'div') {
  const result = Number(process.argv[3]) / Number(process.argv[4]);
  console.log(`A divisão é ${result}`);
}
