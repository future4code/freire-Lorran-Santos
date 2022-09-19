import { UserDatabase } from '../database/UserDatabase';
import { IUserDB, User, userDTO, USER_ROLES } from '../models/User';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export class UserBusiness {
  async create(user: userDTO) {
    const { name, email, password, role } = user;

    if (!name || !email || !password || !role) {
      throw new Error('preencha todos os campos');
    }

    if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres');
    }

    if (
      role.toUpperCase() != USER_ROLES.NORMAL &&
      role.toUpperCase() != USER_ROLES.ADMIN
    ) {
      throw new Error('Usuário só pode ser do tipo normal ou admin');
    }

    const userData = new UserDatabase();

    const emailAlreadyExit = await userData.getUserByEmail(email);

    if (emailAlreadyExit) {
      throw new Error('Email já cadastrado');
    }

    const id = new IdGenerator().generate();

    const hashManager = await new HashManager().hash(password);

    const newUser = new User(id, name, email, hashManager, role);

    console.log(newUser);
    const result = await userData.create(newUser);
    return result;
  }
}
