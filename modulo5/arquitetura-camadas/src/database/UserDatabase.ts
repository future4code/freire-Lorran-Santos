import { User } from '../models/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = 'Arq_Users';

  async getUserByEmail(email: string) {
    const [result] = await BaseDatabase.connection('Arq_Users').where({
      email: email,
    });
    return result;
  }

  async create(user: User) {
    await BaseDatabase.connection('Arq_Users').insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    });
    return 'Usuário cadastrado com sucesso';
  }
}
