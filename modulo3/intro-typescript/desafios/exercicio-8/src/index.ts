const reverseStrings = (): string => {
  const word: string = process.argv[2];
  const arrWord: string[] = word.split('');
  const reverseArrWord: string[] = arrWord.reverse();
  const joinReverseArrWord: string = reverseArrWord.join('');
  return joinReverseArrWord;
};

console.log(reverseStrings());
