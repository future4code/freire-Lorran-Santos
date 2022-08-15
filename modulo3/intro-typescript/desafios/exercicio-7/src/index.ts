// A vira U
// T vira A
// C vira G
// G vira C

const dnaToRna = (dna: string): string => {
  const arrDna = dna.split('');
  const rna: string = arrDna
    .map((item: string) => {
      if (item === 'A') {
        return 'U';
      } else if (item === 'T') {
        return 'A';
      } else if (item === 'C') {
        return 'G';
      } else if (item === 'G') {
        return 'C';
      }
    })
    .join('');
  return rna;
};
console.log(dnaToRna('ATTGCTGCGCATTAACGACGCGTA'));
