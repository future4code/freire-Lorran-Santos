import { genSalt, hash, compare } from 'bcryptjs';

export class HashManager {
  public hash = async (plaintext: string) => {
    const rounds: number = Number(process.env.HASH_ROUND);
    const salt = await genSalt(rounds);
    const result = await hash(plaintext, salt);
    return result;
  };

  public compareHash = async (plaintext: string, hash: string) => {
    return compare(plaintext, hash);
  };
}
