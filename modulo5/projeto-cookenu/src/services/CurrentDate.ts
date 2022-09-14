class CurrentDate {
  public getDate = () => {
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    return `${today}/${
      currentMonth < 10 ? `0${currentMonth}` : currentMonth
    }/${currentYear}`;
  };

  public sendDate = () => {
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    return `${currentYear}-${
      currentMonth < 10 ? `0${currentMonth}` : currentMonth
    }-${today}`;
  };
}

export default CurrentDate;
