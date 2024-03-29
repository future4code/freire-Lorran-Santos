export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

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

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setEmail = (newEmail: string) => {
    this.email = newEmail;
  };

  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };

  public setRole = (newRole: USER_ROLES) => {
    this.role = newRole;
  };
}

export interface ISignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface ISignupResponseDTO {
  message: string;
  token: string;
}

export interface ILoginInputDTO {
  email: string;
  password: string;
}

export interface ILoginResponseDTO {
  message: string;
  token: string;
}

export interface IGetUsersInputDTO {
  token: string;
  search: string;
  order: string;
  sort: string;
  limit: string;
  page: string;
}

export interface IGetUsersDBDTO {
  search: string;
  order: string;
  sort: string;
  limit: Number;
  offset: Number;
}

export interface IGetUsersUserResponseDTO {
  id: string;
  name: string;
  email: string;
}

export interface IDeleteUserInputDTO {
  token: string;
  idToDelete: string;
}

export interface IDeleteUserResponseDTO {
  message: string;
}
