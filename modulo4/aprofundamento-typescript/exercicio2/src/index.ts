// const obterEstatisticas = (
//   numeros: number[]
// ): { maior: number; menor: number; media: number } => {
//   const numerosOrdenados = numeros.sort((a, b) => a - b);

//   let soma = 0;

//   for (let num of numeros) {
//     soma += num;
//   }

//   const estatisticas = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length,
//   };

//   return estatisticas;
// };

// console.table(obterEstatisticas([1, 2, 3, 4]));

// A entrada da função é um array, a saída é umm objeto

type Idades = Array<number>;

type Estatistica = {
  maior: number;
  menor: number;
  media: number;
};

const amostraDeIdades: {
  numeros: Idades;
  obterEstatisticas: (numeros: Idades) => {
    maior: number;
    menor: number;
    media: number;
  };
} = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: function (numeros: Idades) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);

    let soma = 0;

    for (let num of numeros) {
      soma += num;
    }

    const estatisticas: Estatistica = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length,
    };

    return estatisticas;
  },
};

console.table(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros));
