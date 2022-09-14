import { v4 } from 'uuid';

class IdGenerator {
  public generator = (): string => {
    const id = v4();
    return id;
  };
}

export default IdGenerator;
