// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b);
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      let elevarNumero = array[i] ** 2;
      numerosParesElevados.push(elevarNumero);
    }
  }
  return numerosParesElevados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objetoDeNumeros = {};
  let maiorNumero = 0;
  let menorNumero = 0;
  let maiorDivisivelPorMenor = 0;
  let diferenca = 0;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  if (maiorNumero % menorNumero === 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }

  diferenca = maiorNumero - menorNumero;

  objetoDeNumeros.maiorNumero = maiorNumero;
  objetoDeNumeros.maiorDivisivelPorMenor = maiorDivisivelPorMenor;
  objetoDeNumeros.diferenca = diferenca;

  return objetoDeNumeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = [];
  for (let i = 0; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return `Equilátero`;
  } else if (
    (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC) ||
    ladoA === ladoC ||
    ladoB === ladoC
  ) {
    return `Isósceles`;
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return `Escaleno`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b) => a - b);
  let segundo = array[array.length - 2];
  let primeiro = array[1];
  return [segundo, primeiro];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let novasRestricoes = pessoas.filter((pessoas) => {
    if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60) {
      return true;
    }
  });
  return novasRestricoes;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let semPermissao = pessoas.filter((item) => {
    if (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60) {
      return true;
    }
  });
  return semPermissao;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map((cliente) => {
    cliente.compras.map((compra) => {
      cliente.saldoTotal = cliente.saldoTotal - compra;
      cliente.compras = [];
    });
    return cliente;
  });
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordearNomes = consultas.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    } else if (a.nome > b.nome) {
      return 1;
    } else {
      return 0;
    }
  });
  return ordearNomes;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
