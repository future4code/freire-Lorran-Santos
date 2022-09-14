import { Client } from '../types/Client';
import { Commerce } from './Place';

export class CommercialClient extends Commerce implements Client {
  constructor(
    private cnpj: string,
    floorsQuantity: number,
    cep: string,
    public name: string,
    public consumedEnergy: number,
    public registrationNumber: number
  ) {
    super(floorsQuantity, cep);
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
