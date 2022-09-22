class Follow {
  constructor(
    private id: string,
    private userId: string,
    private toFollow: string
  ) {
    this.id = id;
    this.userId = userId;
    this.toFollow = toFollow;
  }

  static toFollowModel = (data: any): Follow => {
    return new Follow(data.id, data.userId, data.toFollow);
  };

  public getId = () => {
    return this.id;
  };
  public getUserId = () => {
    return this.userId;
  };
  public getToFollow = () => {
    return this.toFollow;
  };
}

export default Follow;
