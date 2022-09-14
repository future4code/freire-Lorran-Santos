class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private date: string,
    private userId: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.userId = userId;
  }

  static toUserModel = (data: any): Recipe => {
    return new Recipe(
      data.id,
      data.title,
      data.description,
      data.date,
      data.userId
    );
  };

  public getId = () => {
    return this.id;
  };
  public getTitle = () => {
    return this.title;
  };
  public getDescription = () => {
    return this.description;
  };
  public getDate = () => {
    return this.date;
  };
  public getUserId = () => {
    return this.userId;
  };
}

export default Recipe;
