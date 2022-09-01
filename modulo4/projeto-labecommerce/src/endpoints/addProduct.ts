import { Request, Response } from 'express';
import { connection } from '../connection';
export { Product } from '../types';

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const id: string = Date.now().toString();
    const { name, price, image_url } = req.body as {
      name: string;
      price: number;
      image_url: string;
    };

    if (!name || !price || !image_url) {
      statusCode = 422;
      throw new Error('Favor preencher os campos');
    }
    
    await connection('labecommerce_products').insert({
      id,
      name,
      price,
      image_url,
    });

    res.status(201).send(`Produto cadastrado com sucesso!`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
