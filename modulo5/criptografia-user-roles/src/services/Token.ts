import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types';

class Token {
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES as string,
    });
    return token;
  }

  public getToken(token: string): AuthenticationData {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;
    return payload;
  }
}

export default Token;
