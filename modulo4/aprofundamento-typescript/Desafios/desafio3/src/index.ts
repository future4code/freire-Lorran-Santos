// roupas de inverno 5%
// roupas de verão 10%
// roupas de banho 4%
// roupas de intimas 7%

type Roupa = {
  nome: string;
  preco: number;
  classificacao: string;
  desconto?: number;
};

const arrRoupas: Roupa[] = [
  { nome: 'Camiseta', preco: 49, classificacao: 'verão', desconto: 0 },
  { nome: 'Bermuda', preco: 25, classificacao: 'verão', desconto: 0 },
  { nome: 'Bota', preco: 99, classificacao: 'inverno', desconto: 0 },
  { nome: 'Casaco', preco: 120, classificacao: 'inverno', desconto: 0 },
  { nome: 'Meia', preco: 9, classificacao: 'intima', desconto: 0 },
  { nome: 'Cachecol', preco: 25, classificacao: 'inverno', desconto: 0 },
  { nome: 'Toalha', preco: 29, classificacao: 'banho', desconto: 0 },
];

enum Descontos {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMA = 0.07,
}

const desconto = (arr: Roupa[]): Roupa[] => {
  arr.map((item) => {
    if (item.classificacao === 'verão') {
      const valorDesconto = item.preco * Descontos.VERAO;
      const valorTotal = item.preco - valorDesconto;
      return (item.desconto = valorTotal);
    } else if (item.classificacao === 'inverno') {
      const valorDesconto = item.preco * Descontos.INVERNO;
      const valorTotal = item.preco - valorDesconto;
      return (item.desconto = valorTotal);
    } else if (item.classificacao === 'banho') {
      const valorDesconto = item.preco * Descontos.BANHO;
      const valorTotal = item.preco - valorDesconto;
      return (item.desconto = valorTotal);
    } else if (item.classificacao === 'intima') {
      const valorDesconto = item.preco * Descontos.INTIMA;
      const valorTotal = item.preco - valorDesconto;
      return (item.desconto = valorTotal);
    }
  });

  const arrayComDescontos = [...arr];
  return arrayComDescontos;
};

console.table(desconto(arrRoupas));
