import Follow from '../model/Follow';
import User from '../model/User';
import BaseDataBase from './BaseDataBase';

class UserData extends BaseDataBase {
  public getUserByEmail = async (email: string): Promise<User> => {
    try {
      const [user] = await this.getConnection()
        .from('cookenu_users')
        .where({ email });
      return user && User.toUserModel(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public createUser = async (user: User): Promise<void> => {
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

  // DESAFIOS

  public getUserById = async (id: string): Promise<User> => {
    try {
      const [user] = await this.getConnection()
        .from('cookenu_users')
        .where({ id });
      return user && User.toUserModel(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public follow = async (follow: Follow): Promise<void> => {
    try {
      await this.getConnection().from('cookenu_follows').insert({
        id: follow.getId(),
        user_id: follow.getUserId(),
        user_to_follow: follow.getToFollow(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public unfollow = async (userId: string, toUnfollow: string) => {
    try {
      const result = await this.getConnection()
        .from('cookenu_follows')
        .where('user_id', 'like', `${userId}`)
        .andWhere('user_to_follow', 'like', `${toUnfollow}`);

      if (result.length === 0) {
        throw new Error('Você ainda não segue esse usuário');
      }

      await this.getConnection()
        .from('cookenu_follows')
        .delete()
        .where('user_id', 'like', `${userId}`)
        .andWhere('user_to_follow', 'like', `${toUnfollow}`);
      return 'Você deixou de seguir';
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public getFeed = async (id: string) => {
    try {
      const result = await this.getConnection()
        .from('cookenu_follows')
        .select(
          'cookenu_recipes.id',
          'title',
          'description',
          'cookenu_recipes.date',
          'cookenu_recipes.user_id',
          'cookenu_users.name'
        )
        .innerJoin(
          'cookenu_recipes',
          'cookenu_recipes.user_id',
          'cookenu_follows.user_to_follow'
        )
        .innerJoin(
          'cookenu_users',
          'cookenu_users.id',
          'cookenu_follows.user_to_follow'
        )
        .where('cookenu_follows.user_id', 'like', id);
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };
}

export default UserData;
