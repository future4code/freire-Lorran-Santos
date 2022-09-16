import { Request, Response } from 'express';
import UserData from '../data/UserData';
import Follow from '../model/Follow';
import User, { USER_ROLES } from '../model/User';
import { Authenticator } from '../services/Authenticator';
import CurrentDate from '../services/CurrentDate';
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

  // DESAFIOS

  public follow = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generator();

      const token = req.headers.authorization;
      if (!token) {
        errorCode = 422;
        throw new Error('Token inválido');
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      const userId: string = tokenData.id as string;
      // console.log(userId);

      if (!tokenData.id) {
        errorCode = 409;
        throw new Error('Apenas administradores tem acesso!');
      }

      const userData = new UserData();

      const toFollow: string = req.body.toFollow as string;
      if (!toFollow) {
        errorCode = 404;
        throw new Error('Informe o usuário que você deseja começar a seguir');
      }

      const checkUser = await userData.getUserById(toFollow);
      if (!checkUser) {
        errorCode = 404;
        throw new Error('Usuário não encontrado');
      }

      const newFollow = new Follow(id, userId, toFollow);

      await userData.follow(newFollow);

      res.status(200).send('Seguido com sucesso!');
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public unfollow = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const token = req.headers.authorization;
      if (!token) {
        errorCode = 422;
        throw new Error('Informe um token');
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      const userId: string = tokenData.id as string;
      console.log(tokenData);

      if (!tokenData.id) {
        errorCode = 409;
        throw new Error('Token inválido!');
      }

      const userData = new UserData();

      const { toUnfollow } = req.body;
      if (!toUnfollow) {
        errorCode = 404;
        throw new Error('Informe o usuário que você deseja deixar de seguir');
      }

      const checkUser = await userData.getUserById(toUnfollow);
      if (!checkUser) {
        errorCode = 404;
        throw new Error('Usuário não encontrado');
      }

      const [result] = await userData.unfollow(userId, toUnfollow);

      res.status(200).send({ result });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public feed = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const token = req.headers.authorization;
      if (!token) {
        errorCode = 422;
        throw new Error('Informe um token');
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      const userId: string = tokenData.id as string;
      console.log(tokenData.id);

      if (!tokenData.id) {
        errorCode = 409;
        throw new Error('Token inválido!');
      }

      const userData = new UserData();

      const [result] = await userData.getFeed(userId);

      const getDate = new CurrentDate().getDate(result.date);

      const recipe = {
        id: result.id,
        title: result.title,
        description: result.description,
        date: getDate,
        user_id: result.user_id,
        name: result.name,
      };

      res.status(200).send(recipe);
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };
}

export default UserController;
