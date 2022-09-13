import { UserAccount } from './userAccount';

export class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts(): UserAccount[] {
    return this.accounts;
  }
  public setAccounts(accounts: UserAccount) {
    this.accounts.push(accounts);
  }
}
