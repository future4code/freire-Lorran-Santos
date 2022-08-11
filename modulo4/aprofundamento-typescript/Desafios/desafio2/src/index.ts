enum Epoca {
  AC = 'AC',
  DC = 'DC',
}

type Ano = {
  ano: number;
  epoca?: Epoca.AC | Epoca.DC;
};

enum EpocaHisctrica {
  PREHISTORIA = 'Pré-história',
  IDADEANTIGA = 'Idade Antiga',
  IDADEMEDIA = 'Idade Média',
  IDADEMODERNA = 'Idade Moderna',
  IDADECONTEMPORANEA = 'Idade Contemporânea',
}

const verificaEpoca = (verificaAno: number, verificaEpoca?: Epoca) => {
  const idadeHistorica: Ano = {
    ano: verificaAno,
    epoca: verificaEpoca,
  };
  if (idadeHistorica.epoca === Epoca.AC) {
    if (idadeHistorica.ano < 4000) {
      return 'Pré-História';
    } else {
      return 'Idade Antiga';
    }
  } else if (
    idadeHistorica.epoca === Epoca.DC ||
    idadeHistorica.epoca === undefined
  ) {
    if (idadeHistorica.ano < 476) {
      return 'Idade Antiga';
    } else if (idadeHistorica.ano >= 476) {
      return 'Idade Média';
    } else if (idadeHistorica.ano >= 1453 && idadeHistorica.ano < 1789) {
      return 'Idade Moderna';
    } else if (idadeHistorica.ano >= 1789) {
      return 'Idade Contemporânea';
    }
  }
};

console.log(verificaEpoca(475));
