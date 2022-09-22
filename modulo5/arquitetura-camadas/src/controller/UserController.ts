import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { userDTO } from '../models/User';

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      const userBusiness = new UserBusiness();
      const user: userDTO = {
        name,
        email,
        password,
        role,
      };
      await userBusiness.create(user);

      res.status(201).send('usuario cadastrado com sucesso!');
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
