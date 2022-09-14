import * as bcrypt from 'bcryptjs';

class HashManager {
  public hash = async (text: string): Promise<string> => {
    const rounds: number = Number(process.env.ROUNDS);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(text, salt);
  };

  public compare = (text: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(text, hash);
  };
}

export default HashManager;
