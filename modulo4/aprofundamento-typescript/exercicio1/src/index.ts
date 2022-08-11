const minhaString: string = 'Uma string';
const meuNumero: number = 1;

enum CorFavorita {
  PRETO = 'Preto',
  AZUL = 'Azul',
  ROSA = 'Rosa',
}

type Pessoa = {
  nome: string;
  idade: number;
  corPreferida: CorFavorita;
};

const pessoa1: Pessoa = {
  nome: 'Lorran',
  idade: 22,
  corPreferida: CorFavorita.AZUL,
};

const pessoa2: Pessoa = {
  nome: 'Fernanda',
  idade: 21,
  corPreferida: CorFavorita.ROSA,
};

const pessoa3: Pessoa = {
  nome: 'Lorenzo',
  idade: 7,
  corPreferida: CorFavorita.PRETO,
};

const pessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3];
console.table(pessoas);
