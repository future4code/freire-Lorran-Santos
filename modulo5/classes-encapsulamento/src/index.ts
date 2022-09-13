import { Bank } from './class/bank';
import { UserAccount } from './class/userAccount';

const user1: UserAccount = new UserAccount('123.456.789-00', 'João', 23);

const contas: Bank = new Bank([user1]);

console.log(contas);
