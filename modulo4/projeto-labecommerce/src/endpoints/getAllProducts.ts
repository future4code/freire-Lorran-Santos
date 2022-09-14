import { Request, Response } from 'express';
import { connection } from '../connection';
import { Product } from '../types';

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const result: Product[] = await connection('labecommerce_products');

    const showProducts: Product[] = result.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
      };
    });

    res.status(200).send(showProducts);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
