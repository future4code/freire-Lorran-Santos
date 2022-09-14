import { User } from './User';

export class Customer extends User {
  public purchaseTotal: number = 0;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    private creditCard: string
  ) {
    super(id, email, name, password);
    console.log('Chamando o construtor da classe Customer');
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
