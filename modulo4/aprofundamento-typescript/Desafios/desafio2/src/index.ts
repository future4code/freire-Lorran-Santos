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

const verificaEpoca = (
  verificaAno: number,
  verificaEpoca?: Epoca
): string | undefined => {
  const idadeHistorica: Ano = {
    ano: verificaAno,
    epoca: verificaEpoca,
  };
  if (idadeHistorica.epoca === Epoca.AC) {
    if (idadeHistorica.ano < 4000) {
      return EpocaHisctrica.PREHISTORIA;
    } else {
      return EpocaHisctrica.IDADEANTIGA;
    }
  } else if (
    idadeHistorica.epoca === Epoca.DC ||
    idadeHistorica.epoca === undefined
  ) {
    if (idadeHistorica.ano < 476) {
      return EpocaHisctrica.IDADEANTIGA;
    } else if (idadeHistorica.ano >= 476) {
      return EpocaHisctrica.IDADEMEDIA;
    } else if (idadeHistorica.ano >= 1453 && idadeHistorica.ano < 1789) {
      return EpocaHisctrica.IDADEMODERNA;
    } else if (idadeHistorica.ano >= 1789) {
      return EpocaHisctrica.IDADECONTEMPORANEA;
    }
  }
};

console.log(verificaEpoca(3000, Epoca.AC));
