const triangleCheck = (a: number, b: number, c: number): string => {
  if (a !== b && b !== c) {
    return 'Escaleno';
  } else if (a === b && b === c) {
    return 'Equilátero';
  } else {
    return 'Isósceles';
  }
};

console.log(triangleCheck(2, 2, 2));
