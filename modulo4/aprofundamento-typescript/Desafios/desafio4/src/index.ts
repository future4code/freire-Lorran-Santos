type Pratos = {
  nome: string;
  custo: number;
  valorVenda: number;
  ingredientes: string[];
};

let cardapio: Pratos[] = [
  {
    nome: 'Alaminuta',
    custo: 12,
    valorVenda: 22,
    ingredientes: ['arroz', 'Feijão', 'Carne', 'Batata Frita'],
  },
  {
    nome: 'Massa Alho e Oleo',
    custo: 9,
    valorVenda: 18,
    ingredientes: ['Macarrão', 'Alho', 'Oleo'],
  },
];

// função de adicionar prato novo ao cardápio
const addPrato = (
  nome: string,
  custo: number,
  valorVenda: number,
  ingredientes: string[]
) => {
  const novoPrato: Pratos = {
    nome: nome,
    custo: custo,
    valorVenda: valorVenda,
    ingredientes: ingredientes,
  };

  cardapio.push(novoPrato);
  return cardapio;
};

console.log('Cardápio:');
console.table(addPrato('teste', 2, 6, ['teste2', 'teste3', 'teste4']));

// função de busca pelo nome do prato
const buscarPrato = (nomePrato: string): Pratos[] => {
  const pratoDesejado: Pratos[] = cardapio.filter((item) => {
    if (item.nome.toLocaleLowerCase() === nomePrato.toLowerCase()) {
      return `${item.nome} ${item.valorVenda},00`;
    }
  });
  return pratoDesejado;
};

console.log('Prato procurado:');
console.table(buscarPrato('alaminuta'));

// variáveis globais para serem reutilizadas
let vendas: Pratos[] = [];
let ganhos: number;
let custos: number;

// função que registra uma venda e guarda na variável vendas e atribui valores de custos e ganhos
const venda = (nomePrato: string): Pratos[] => {
  const pratoDesejado: Pratos[] = cardapio.filter((item) => {
    if (item.nome.toLocaleLowerCase() === nomePrato.toLowerCase()) {
      ganhos = item.valorVenda;
      custos = item.custo;
      return item;
    }
  });
  vendas = pratoDesejado;
  return vendas;
};

venda('alaminuta');
console.log('Vendas:');
console.table(vendas);

// calcula o lucro do restaurante
const lucroRestaurante = (): string => {
  let lucro: number = ganhos - custos;

  return `Você vendeu o prato ${vendas[0].nome}, que custou $${vendas[0].custo},00 e vendeu por $${vendas[0].valorVenda},00. Gerando um lucro total ao restaurante de $${lucro},00`;
};
console.log(lucroRestaurante());
