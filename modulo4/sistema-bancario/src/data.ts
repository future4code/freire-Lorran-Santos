// Tipos da conta e extrato
type BuysDetails = {
  date: string;
  description: string;
  value: number;
};
type Extract = {
  balance: number;
  spen: BuysDetails[];
};
export type User = {
  id: number;
  name: string;
  cpf: string;
  birth: string;
};
export type Account = {
  user: User;
  extract: Extract[];
};

// Array de clientes

export let clients: Account[] = [
  {
    user: {
      id: 1660850648853,
      name: "teste",
      cpf: "123.456.789-10",
      birth: "22/11/1999",
    },
    extract: [
      {
        balance: 2000,
        spen: [
          {
            date: "13/01/2022",
            description: "Placa de Video RTX 2060",
            value: 1999,
          },
        ],
      },
    ],
  },
];
