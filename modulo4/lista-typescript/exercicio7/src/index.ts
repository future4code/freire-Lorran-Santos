type Produto = {
  nome: string;
  quantidade: number | string;
  valorUnitario: number | string;
};

const estoque: Produto[] | string[] = [
  { nome: 'MacMugffin', quantidade: 37, valorUnitario: 51.04 },
  { nome: 'Vassoura voadora', quantidade: 56, valorUnitario: 210.0 },
  { nome: 'Laço da verdade', quantidade: 32, valorUnitario: 571.5 },
  { nome: 'O precioso', quantidade: 1, valorUnitario: 9181.923 },
  { nome: 'Caneta de 250 cores', quantidade: 123, valorUnitario: 17 },
  { nome: 'Plumbus', quantidade: 13, valorUnitario: 140.44 },
  { nome: 'Pokebola', quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace('.', ',');
  return 'R$ ' + valorAjustado;
};

const ordenaEstoque = (arr: Produto[]): Produto[] => {
  const itensEstoque = arr
    .map((item) => {
      item.valorUnitario = ajustaPreco(item.valorUnitario as number);
      return item;
    })
    .sort((a, b) => {
      if (a.quantidade < b.quantidade) {
        return -1;
      }
      if (a.quantidade > b.quantidade) {
        return 1;
      }
      return 0;
    });
  const teste = itensEstoque.map((item) => {
    let quantidade = String(item.quantidade);
    item.quantidade = quantidade;
    return item;
  });
  return teste;
};

console.table(ordenaEstoque(estoque));
