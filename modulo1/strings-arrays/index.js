// Exercícios de interpretação de código
// 1 -Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array) // a. undefined | porque não foi atribuído nenhum valor no array. O 'a. ' é uma string aparece normal.

// array = null
// console.log('b. ', array) // b. null | Foi atribuído o valor de null na array. O 'b. ' aparece normal pois é uma string.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11 | 'c. ' é uma string normal. 11 é a quantidade de elementos na Array que tem um novo valor de um conjunto numérico.

// let i = 0
// console.log('d. ', array[i]) // 3 | porque o i=0 refere-se ao indice 0, que no caso é o número 3.

// array[i+1] = 19
// console.log('e. ', array) // ele modificou o número do indice 1 para 19.

// const valor = array[i+6]
// console.log('f. ', valor) // 9 | mostra o elemento do indice 6

// 2 - Leia o código abaixo com atenção
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // "SUBI NUM ÔNIBUS EM MIRROCOS 27"

// Exercícios de escrita de código
// 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// const nomeDoUsuario = prompt('Digite seu nome: ');
// const emailDoUsuario = prompt('Digite seu email: ');

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// let comidasFavoritas = ["hamburguer", "lentilha", "arroz", "feijão", "banana"];

// a - Imprima no console o array completo:
// console.log(comidasFavoritas);

// b - Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
// console.log(`Essas são as minhas comidas preferidas:
// ${comidasFavoritas[0]}
// ${comidasFavoritas[1]}
// ${comidasFavoritas[2]}
// ${comidasFavoritas[3]}
// ${comidasFavoritas[4]}`);

// c - Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
// let comidaFavoritaUsuario = prompt("Digite a sua comida favorita: ");
// comidasFavoritas[1] = comidaFavoritaUsuario;
// console.log(comidasFavoritas);

// 3 - Faça um programa, seguindo os passos:
// a - Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = [];
console.log(listaDeTarefas);

// b - Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const tarefasUsuario = prompt("Digite uma tarefa do seu dia");
const tarefasUsuario2 = prompt("Digite outra tarefa do seu dia");
const tarefasUsuario3 = prompt("Digite mais uma tarefa do seu dia");
listaDeTarefas[0] = tarefasUsuario;
listaDeTarefas[1] = tarefasUsuario2;
listaDeTarefas[2] = tarefasUsuario3;

// c - Imprima o array no console
console.log(listaDeTarefas);

// d - Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
const indiceDaTarefa = prompt(
  "Digite de escolha uma das tarefas que digitou 0, 1 ou 2: "
);

// e - Remova da lista o item de índice que o usuário escolheu.
// const removerLista = listaDeTarefas[indiceDaTarefa - 1];
listaDeTarefas.splice(indiceDaTarefa, 1);

// f - Imprima o array no console
console.log(listaDeTarefas);
