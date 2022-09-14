import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../type';

class TokenGenerate {
  generateToken(input: AuthenticationData): string {
    const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
      expiresIn: '24h',
    });
    return token;
  }
  getToken(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  }
}

export default TokenGenerate;
