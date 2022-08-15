const numbers = (): void => {
  const numberOne: number = Number(process.argv[2]);
  const numberTwo: number = Number(process.argv[3]);

  let bigNumber;
  let smallNumber;

  if (numberOne >= numberTwo) {
    bigNumber = numberOne;
    smallNumber = numberTwo;
  } else {
    bigNumber = numberTwo;
    smallNumber = numberOne;
  }

  const numberSum = numberOne + numberTwo;
  const numberSub = bigNumber - smallNumber;
  const numberDiv = bigNumber / smallNumber;
  const numberMult = numberOne * numberTwo;
  console.log(
    `A soma dos números é ${numberSum} | A subtração dos números é ${numberSub} | A múltiplicação dos números é ${numberMult} | A divisão dos números é ${numberDiv}`
  );
};

console.log(numbers());
