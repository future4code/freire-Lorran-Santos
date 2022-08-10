const numbers = (): void => {
  const numberOne: number = Number(process.argv[2]);
  const numberTwo: number = Number(process.argv[3]);

  let numeroMaior;
  let numeroMenor;

  if (numberOne >= numberTwo) {
    numeroMaior = numberOne;
    numeroMenor = numberTwo;
  } else {
    numeroMaior = numberTwo;
    numeroMenor = numberOne;
  }

  const numberSum = numberOne + numberTwo;
  const numberSub = numeroMaior - numeroMenor;
  const numberDiv = numeroMaior / numeroMenor;
  const numberMult = numberOne * numberTwo;
  console.log(
    `A soma dos números é ${numberSum} | A subtração dos números é ${numberSub} | A múltiplicação dos números é ${numberMult} | A divisão dos números é ${numberDiv}`
  );
};

console.log(numbers());
