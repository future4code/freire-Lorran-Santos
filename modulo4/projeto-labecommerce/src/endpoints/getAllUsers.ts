import { Request, Response } from 'express';
import { connection } from '../connection';
import { Users } from '../types';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const result: Users[] = await connection('labecommerce_users');
    const showUsers: Users[] = result.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      };
    });
    res.status(200).send(showUsers);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
