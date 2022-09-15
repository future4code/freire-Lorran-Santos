import { Request, Response } from 'express';
import UserData from '../data/UserData';
import User, { USER_ROLES } from '../model/User';
import { Authenticator } from '../services/Authenticator';
import HashManager from '../services/HashManager';
import IdGenerator from '../services/IdGenerator';

class UserController {
  public signup = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const idGenerator = new IdGenerator();
      const id = idGenerator.generator();

      const { name, email, password, role } = req.body;
      if (!name || !email || !password || !role) {
        errorCode = 422;
        throw new Error('Preencha os campos "name", "email" e "password"');
      }
      if (password.length < 6) {
        errorCode = 422;
        throw new Error('Insira uma senha de nomínimo 6 caracteres');
      }

      const userData = new UserData();
      const checkUser = await userData.getUserByEmail(email);
      if (checkUser) {
        errorCode = 409;
        throw new Error('Email já cadastrado');
      }

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(password);

      const newUser = new User(id, name, email, hashPassword, role);
      await userData.createUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generate({ id, role });

      res.status(200).send({
        message: 'Usuário cadastrado com sucesso!',
        token,
      });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        errorCode = 422;
        throw new Error('Preencha os campos "email" e "password"');
      }
      if (password.length < 6) {
        errorCode = 422;
        throw new Error('Insira uma senha de nomínimo 6 caracteres');
      }

      const userData = new UserData();
      const user = await userData.getUserByEmail(email);
      if (!user) {
        errorCode = 409;
        throw new Error('Email inválido');
      }

      const hashManager = new HashManager();
      const checkPassword = await hashManager.compare(
        password,
        user.getPassword()
      );
      if (!checkPassword) {
        errorCode = 401;
        throw new Error('Email ou senha inválidos');
      }

      const authenticator = new Authenticator();
      const token = authenticator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      res.status(200).send({
        message: 'Usuário logado com sucesso!',
        token,
      });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public profile = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const token = req.headers.authorization;
      if (!token) {
        errorCode = 422;
        throw new Error('Token inválido');
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);

      const userData = new UserData();
      const user = await userData.getProfile(tokenData.id);

      res.status(200).send({ user });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public selectProfile = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const token = req.headers.authorization;
      if (!token) {
        errorCode = 422;
        throw new Error('Token inválido');
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      console.log(tokenData.role);

      if (tokenData.role !== USER_ROLES.ADMIN) {
        errorCode = 409;
        throw new Error('Apenas administradores tem acesso!');
      }

      const id: string = req.params.id as string;

      const userData = new UserData();
      const user = await userData.getProfile(id);

      res.status(200).send({ user });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };
}

export default UserController;
