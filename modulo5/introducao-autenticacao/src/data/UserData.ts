import User from '../model/User';
import TokenGenerate from '../services/tokenGenerate';
import BaseDataBase from './BaseDataBase';

class UserData extends BaseDataBase {
  public async createUser(user: User) {
    try {
      const [result]: User[] = await this.getConnection().from('User').insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
      });

      const newToken = new TokenGenerate();
      const token = newToken.generateToken({ id: user.getId() });

      return { token };
    } catch (error: any) {
      return error.sqlMessage || { message: error.message };
    }
  }

  public async login(email: string) {
    try {
      const result = await this.getConnection()
        .select('*')
        .from('User')
        .where({ email });

      const user = result;
      const newToken = new TokenGenerate();
      const token = newToken.generateToken({ id: user[0] });
      return { result, token };
    } catch (error: any) {
      return error.sqlMessage || { message: error.message };
    }
  }

  public async getUserById(id: string) {
    try {
      const result = await this.getConnection()
        .select('*')
        .from('User')
        .where({ id });
      
      return result;
    } catch (error: any) {
      return error.sqlMessage || { message: error.message };
    }
  }
}

export default UserData;
