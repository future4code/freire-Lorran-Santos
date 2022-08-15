type Usuario = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const clientes: Usuario[] = [
  { cliente: 'João', saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: 'Paula', saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: 'Pedro', saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: 'Luciano', saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: 'Artur', saldoTotal: 1800, debitos: [200, 300] },
  { cliente: 'Soter', saldoTotal: 1200, debitos: [] },
];

const precisaEmprestimo = (arr: Usuario[]) => {
  const total = arr.filter((item) => {
    let dividas = item.debitos.reduce((inicio, atual) => {
      return inicio + atual;
    }, 0);
    const novoSaldo = item.saldoTotal - dividas;
    if (novoSaldo < 0) {
      item.saldoTotal = novoSaldo;
      item.debitos = [];
      return item;
    }
  });
  return total;
};

console.table(precisaEmprestimo(clientes));
