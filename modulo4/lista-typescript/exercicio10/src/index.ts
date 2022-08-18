const validaCpf = (cpf: string) => {
  const valorCpf: string = cpf.replace(/[.-]/g, '');
  const numberosBase: string = valorCpf.substring(0, 9);
  const numeroDV: number = Number(valorCpf.substring(9, 11));
  const somaNumerosBase = (acumulador: number, valorAtual: number) =>
    acumulador + valorAtual;
  const validacaoNumerosBase = numberosBase.split('').map((item, index) => {
    return index + 2
  }).reverse()
  return validacaoNumerosBase;
};

console.log(validaCpf('123.456.789-90'));
