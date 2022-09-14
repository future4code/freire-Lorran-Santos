import { Client } from '../types/Client';
import { Residence } from './Place';

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: string,
    residentsQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
