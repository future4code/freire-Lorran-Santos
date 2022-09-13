import { v4 } from 'uuid';

class GenerateId {
  public generateId(): string {
    const id: string = v4();
    return id;
  }
}

export default GenerateId;
