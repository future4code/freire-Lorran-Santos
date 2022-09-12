import { Request, Response } from 'express';
import { v4 } from 'uuid';
import BaseDataBase from '../data/BaseDataBase';
import UserData from '../data/UserData';
import User from '../model/User';
import TokenGenerate from '../services/tokenGenerate';

class UserController extends BaseDataBase {
  async createUser(req: Request, res: Response): Promise<void> {
    let errorCode = 500;
    try {
      const id: string = v4();
      const { email, password } = req.body as {
        email: string;
        password: string;
      };
      if (!email || !password) {
        errorCode = 401;
        throw new Error('Informe os dado para criar conta');
      }
      if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        errorCode = 422;
        throw new Error('Insira um email válido');
      }
      if (password.length < 6) {
        errorCode = 422;
        throw new Error('A senha deve ter no mínimo 6 carcteres');
      }

      const newUser = new User(id, email, password);

      const user = new UserData();

      const result = await user.createUser(newUser);

      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    let errorCode = 500;
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };
      if (!email || !password) {
        errorCode = 401;
        throw new Error('Informe o email e senha para efetuar o login');
      }
      if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        errorCode = 422;
        throw new Error('Informe um email válido');
      }
      if (password.length < 6) {
        errorCode = 422;
        throw new Error('Insira uma senha válida');
      }

      const user = new UserData();

      const result = await user.login(email);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  }

  async profile(req: Request, res: Response) {
    let errorCode = 500;
    try {
      const token: string = req.headers.authorization as string;

      const authenticationToken = new TokenGenerate();
      const profile = new UserData();
      const getToken = authenticationToken.getToken(token);
      // const getToken = authenticationToken.getToken(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjQ1ZjY2ODMxLTFiYTMtNDBlYi05MzQ1LWMzNmQwOTQ5YmM2MiIsImVtYWlsIjoiZ29oYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZW5oYTEyMzQ1NiJ9LCJpYXQiOjE2NjMwMTMwMjEsImV4cCI6MTY2MzA5OTQyMX0.B11_UVWYl_WvNmnhPKZJjS0ksY7iQ9llbjMmnbAq4QY'
      // );
      const test = getToken.id
      console.log(test);
      const user = await profile.getUserById(
        getToken.id
      );
      const result = user[0];

      res.status(200).send({
        id: result.id,
        email: result.email,
      });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  }
}

export default UserController;
