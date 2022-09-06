import { Client } from '../types/Client';
import { Industry } from './Place';

export class IndustrialClient extends Industry implements Client {
  constructor(
    private registationIndustrial: number,
    machinesQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(machinesQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
