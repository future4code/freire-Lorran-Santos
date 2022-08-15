const studant = (
  age: number,
  school: boolean,
  freeTime: number,
  shift: string
): boolean => {
  if (
    (age >= 18 && school && freeTime >= 40 && shift === 'integral') ||
    (age >= 18 && school && freeTime >= 20 && shift === 'noturno')
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(studant(22, true, 20, 'noturno'));
