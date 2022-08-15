const renovacaoCarteira = (
  nascimento: string,
  emissaoCarteira: string
): boolean => {
  const anoNascimento: number = Number(
    nascimento.replace('/', ' ').replace('/', ' ').substring(5, 10)
  );
  const anoEmissao: number = Number(
    emissaoCarteira.replace('/', ' ').replace('/', ' ').substring(5, 10)
  );

  const anoAtual: number = new Date().getFullYear();
  const idade: number = anoAtual - anoNascimento;
  const tempoPosEmissao: number = anoAtual - anoEmissao;

  if (idade <= 20 && tempoPosEmissao >= 5) {
    return true;
  } else if (idade > 20 && idade <= 50 && tempoPosEmissao >= 10) {
    return true;
  } else if (idade > 50 && tempoPosEmissao >= 15) {
    return true
  } else {
    return false;
  }
};

console.log(renovacaoCarteira('22/11/1980', '22/11/2010'));
