class User {
  constructor(
    private id: string,
    private email: string,
    private password: string,
    private role: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public getId() {
    return this.id;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }
  public getRole() {
    return this.role;
  }
}

export default User;
