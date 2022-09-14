import User from '../model/User';
import BaseDataBase from './BaseDataBase';

class UserData extends BaseDataBase {
  public getUserByEmail = async (email: string) => {
    try {
      const [user] = await this.getConnection()
        .from('cookenu_users')
        .where({ email });
      return user && User.toUserModel(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public createUser = async (user: User) => {
    try {
      await this.getConnection().from('cookenu_users').insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public getProfile = async (id: string): Promise<User> => {
    try {
      const [user] = await this.getConnection()
        .from('cookenu_users')
        .select('id', 'name', 'email')
        .where({ id });
      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };
}

export default UserData;
