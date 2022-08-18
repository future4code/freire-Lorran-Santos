/*
INFORMAÇÕES ESSENCIAIS DOS FILMES
1. nome do filme
2. ano de lançamento
3. gênero do filme
OPCIONAL:
4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes)
*/

enum GENERO {
  ACAO = 'ação',
  DRAMA = 'drama',
  COMEDIA = 'comédia',
  ROMANCE = 'romance',
  TERROR = 'terror',
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};

const apresentaFilme = (
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao?: number
): Filme => {
  const filmeEscolhido: Filme = {
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
    pontuacao: pontuacao,
  };
  return filmeEscolhido;
};

console.table(apresentaFilme('Duna', 2021, GENERO.ACAO, 74));
