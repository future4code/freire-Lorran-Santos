export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static toUserModel = (data: any): User => {
    return new User(data.id, data.name, data.email, data.password, data.role);
  };

  public getId = () => {
    return this.id;
  };
  public getName = () => {
    return this.name;
  };
  public getEmail = () => {
    return this.email;
  };
  public getPassword = () => {
    return this.password;
  };
  public getRole = () => {
    return this.role;
  };
}

export default User;
