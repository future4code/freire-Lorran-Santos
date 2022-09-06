import { Client } from './types/Client';
import { Customer } from './classes/Customer';
import { User } from './classes/User';
import { Address, Commerce, Industry, Place, Residence } from './classes/Place';
import { ResidentialClient } from './classes/ResidentialClient';
import { CommercialClient } from './classes/CommercialClient';
import { IndustrialClient } from './classes/IndustrialClient';

// Herança
// Exercício 1
// const user1: User = new User('001', 'fulano@gmail.com', 'Fulano', '123456');

// console.log(user1.getEmail());

// a) Não por ela ser private e não ter uma função tornando-a pública
// b) A mensagem foi impressa uma única vez

// Exercício 2
// const customer1: Customer = new Customer(
//   '002',
//   'beltrano@gmail.com',
//   'Beltrano',
//   '123456',
//   'R$ 400,00'
// );

//a) foi impressa uma vez
// b) Foi impressa uma vez tamem por ela ser a classe pai da customer

// Ecercício 3
// console.log(customer1.purchaseTotal);
// console.log(customer1.getCreditCard());
// console.log(customer1.getEmail());
// console.log(customer1.getName());
// console.log(customer1.getId());

// a) Não pois não tem a função para transformar o 'password' em público e permitindo a visualização

// Exercício 4 / 5
// console.log(customer1.introduceYourself());

// Polimorfismo

// Exercício 1
const client: Client = {
  name: 'Ciclano',
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2;
  },
};

// console.log(client.calculateBill());
// a) A função só aparece quando é chamada de forma individual com o exemplo de 'client.calculateBill()'

// Exercício 2
// const place1: Place = new Address('123546-54');
// console.log(place1.getCep());
// a) Não é possível criar uma instância de uma classe abstrata
// b) Criar uma classe que extende da classe Place

// Exercício 3
// const residence1: Residence = new Residence(2, '38184-340');
// console.log(residence1.getCep());
// console.log(residence1.getResidentsQuantity());
// const commerce1: Commerce = new Commerce(5, '55294-820');
// console.log(commerce1.getCep());
// console.log(commerce1.getFloorsQuantity());
// const indutry1: Industry = new Industry(16, '77001-731');
// console.log(indutry1.getCep());
// console.log(indutry1.getMachinesQuantity());

// Exercício 4
const morador1: ResidentialClient = new ResidentialClient(
  '123.456.789-10',
  2,
  '38184-340',
  'Morador',
  102,
  100
);
console.log(morador1.calculateBill());
// a) Possui todos os métodos de todas as outras classes porque é uma classe filha de todas as outras e da interface Client porque faz referência a ele

// Exercício 5
const commerce2: CommercialClient = new CommercialClient('86.387.098/0001-05', 6, '86.387.098/0001-05', 'Bazar', 450, 987539);
console.log(commerce2);
console.log(`O valor da conta da luz do estabelecimento ${commerce2.name} é de R$ ${commerce2.calculateBill()}`)

// a) Sintaxe praticamente igual
// b) Métodos únicos de acordo com as classes pais

// Exercício 6
const industry2: IndustrialClient = new IndustrialClient(302659874, 16, '69316-138', 'Taurus', 12354, 1240);
console.log(industry2);
console.log(industry2.calculateBill())