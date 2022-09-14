import { Request, Response } from 'express';
import { connection } from '../connection';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const id: string = Date.now().toString();
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    await connection('labecommerce_users').insert({
      id,
      name,
      email,
      password,
    });

    res.status(201).send(`Usuário cadastrado com sucesso!`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
