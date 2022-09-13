import Token from '../services/Token';
import User from '../models/User';
import BaseDataBase from './BaseDataBase';
import { HashManager } from '../services/HashManager';

class UserData extends BaseDataBase {
  public createUser = async (user: User) => {
    try {
      const hashManager = new HashManager();
      const newPass = await hashManager.hash(user.getPassword());
      const result = await this.getConnection().from('User').insert({
        id: user.getId(),
        email: user.getEmail(),
        password: newPass,
        role: user.getRole(),
      });
      const instanceToken = new Token();
      const token = instanceToken.generateToken({
        id: user.getId(),
        role: user.getRole(),
      });
      console.log(newPass);
      return { token };
    } catch (error: any) {
      return error.sqlMessage || { message: error.message };
    }
  };

  public getUsetByEmail = async (email: string) => {
    try {
      const [result] = await this.getConnection()
        .from('User')
        .where('email', 'like', `${email}`);
      return result;
    } catch (error: any) {
      return error.sqlMessage || { message: error.messaege };
    }
  };

  public getUserById = async (id: string) => {
    try {
      const [result] = await this.getConnection()
        .from('User')
        .where('id', 'like', `${id}`);
      return result;
    } catch (error: any) {
      return error.sqlMessage || { message: error.messaege };
    }
  };
}

export default UserData;
