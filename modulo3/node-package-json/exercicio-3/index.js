const toDo = ['Comprar pão'];

if (process.argv[2] != undefined) {
  toDo.push(process.argv[2]);
  console.log('Tarefa Adicionada com Sucesso!');
  console.log('tarefas:', toDo);
} else {
  console.log(toDo);
}
