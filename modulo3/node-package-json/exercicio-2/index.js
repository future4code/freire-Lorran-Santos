if (process.argv[2] === 'add') {
  const result = Number(process.argv[3]) + Number(process.argv[4]);
  console.log(result);
} else if (process.argv[2] === 'sub') {
  const result = Number(process.argv[3]) - Number(process.argv[4]);
  console.log(result);
} else if (process.argv[2] === 'mult') {
  const result = Number(process.argv[3]) * Number(process.argv[4]);
  console.log(result);
} else if (process.argv[2] === 'div') {
  const result = Number(process.argv[3]) / Number(process.argv[4]);
  console.log(result);
}
