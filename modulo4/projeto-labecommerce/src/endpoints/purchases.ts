import { Request, Response } from 'express';
import { connection } from '../connection';
import { Product } from '../types';

export const purchases = async (req: Request, res: Response): Promise<void> => {
  let statusCode = 500;
  try {
    const id: string = Date.now().toString();
    const { user_id, product_id, quantity } = req.body as {
      user_id: string;
      product_id: string;
      quantity: number;
    };

    if (!user_id || !product_id) {
      statusCode = 422;
      throw new Error(`Preencha todos os dados para finalizar a compra`);
    } else if (user_id === '' || product_id === '') {
      statusCode = 422;
      throw new Error(`Preencha os campos com valores válidos`);
    }

    const getProduct = await connection('labecommerce_products').where(
      'id',
      'like',
      `%${product_id}%`
    );

    const priceProduct = getProduct.map((item) => item.price).join('');
    const price: number = Number(priceProduct) * quantity;

    await connection('labecommerce_purchases').insert({
      id,
      user_id,
      product_id,
      quantity,
      total_price: price,
    });

    res.status(200).send(`Compra realizada com sucesso!`);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
