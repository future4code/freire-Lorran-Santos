const apresentacao = (nome: string, data: string): string => {
  const dataNascimento = data.split('/');
  const arrDataNascimento = JSON.parse('[' + dataNascimento + ']');
  const dia: string = arrDataNascimento[0];
  const mes: string = arrDataNascimento[1]
  const ano: string = arrDataNascimento[2];

  return `Olá me chamo ${nome}, nasci no dia ${dia}, do mês de ${mes} do ano de ${ano}`;
};

console.log(apresentacao('Lorran', '22/11/1999'));
