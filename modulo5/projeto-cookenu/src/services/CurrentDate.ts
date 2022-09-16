class CurrentDate {
  public getDate = (date: string) => {
    let newDate: Date = new Date(date);
    let month = newDate.getMonth() + 1;

    const newFormattedDate: string = `${newDate.getDate()}/${
      month < 10 ? `0${month}` : month
    }/${newDate.getFullYear()}`;
    return newFormattedDate;
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
