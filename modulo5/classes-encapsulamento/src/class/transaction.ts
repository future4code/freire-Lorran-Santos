export class Transaction {
  private description: string;
  private date: string;
  private value: number;

  constructor(description: string, date: string, value: number) {
    this.description = description;
    this.date = date;
    this.value = value;
  }

  public getDescription(): string {
    return this.description;
  }
  public getDate(): string {
    return this.date;
  }
  public getValue(): number {
    return this.value;
  }

  public setDescription(newDescription: string): void {
    this.description = newDescription;
  }
  public setDate(newDate: string): void {
    this.date = newDate;
  }
  public setValue(newValue: number): void {
    this.value = newValue;
  }
}
