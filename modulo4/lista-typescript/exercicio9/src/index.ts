const anagrama = (palavra: string): number => {
  const novaPalavra = palavra
    .split('')
    .map((item, index) => {
      return index + 1;
    })
    .reverse();

  const multiplicacao = (acumulador: number, valorAtual: number): number =>
    acumulador * valorAtual;

  return novaPalavra.reduce(multiplicacao);
};

console.log(anagrama('mesa'));
