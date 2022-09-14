import { Request, Response } from 'express';
import BaseDataBase from '../data/BaseDataBase';
import UserData from '../data/UserData';
import GenerateId from '../services/GenerateId';
import User from '../models/User';
import { HashManager } from '../services/HashManager';
import Token from '../services/Token';

class UserController extends BaseDataBase {
  public createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500;
    try {
      const userData = new UserData();
      const generateId = new GenerateId();
      const id: string = generateId.generateId();
      const { email, password, role } = req.body as {
        email: string;
        password: string;
        role: string;
      };
      if (!email || !password || !role) {
        errorCode = 422;
        throw new Error('Favor preencher todos os campos');
      }
      const newUser = new User(id, email, password, role);
      const result = await userData.createUser(newUser);
      res.status(201).send(result);
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };
  public login = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500;
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };
      if (!email || !password) {
        errorCode = 422;
        throw new Error('Informe os dados para login');
      }
      if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        errorCode = 409;
        throw new Error('Informe um email válido');
      }
      if (password.length < 6) {
        errorCode = 422;
        throw new Error('Informe uma senha válida');
      }
      const userData = new UserData();
      const hashManager = new HashManager();

      const user = await userData.getUsetByEmail(email);

      const comparePasswords = await hashManager.compareHash(
        password,
        user.password
      );

      const instanceToken = new Token();
      const newToken = instanceToken.generateToken({
        id: user.id,
        role: user.role,
      });

      if (!comparePasswords) {
        errorCode = 404;
        throw new Error('Senha incorreta');
      } else {
        res.status(200).send({ user, newToken });
      }
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public profile = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500;
    try {
      const token: string = req.headers.authorization as string;
      if (!token) {
        errorCode = 422;
        throw new Error('Autorização negada');
      }
      const instanceToken = new Token();
      const authenticationData = instanceToken.getToken(token);
      const id: string = authenticationData.id as string;

      const userData = new UserData();
      const user = await userData.getUserById(id);

      if (authenticationData.role !== 'normal') {
        errorCode = 422;
        throw new Error('Apenas usuários normais tem acesso');
      }

      res.status(200).send({
        id: user.id,
        email: user.email,
        role: user.role,
      });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };
}
export default UserController;
