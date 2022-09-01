import { Request, Response } from 'express';
import { connection } from '../connection';

export const getPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 500;
  try {
    const id = req.params.user_id;

    const result = await connection('labecommerce_purchases').where(
      `user_id`,
      `like`,
      `%${id}%`
    );

    const showPurchases = result.map((item) => item);
    res.status(200).send(showPurchases);
  } catch (error: any) {
    res.status(statusCode).send(error.sqlMessage || { message: error.message });
  }
};
