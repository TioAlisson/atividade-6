4. Qual a diferença entre alert(), confirm() e prompt()?

alert(): Exibe uma caixa de mensagem para o usuário com um texto e um botão "OK". Não retorna nenhum valor. Usado para mostrar informações.
alert("Mensagem informativa!");

confirm(): Exibe uma caixa de diálogo com uma mensagem e dois botões: "OK" e "Cancelar". Retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar".
let resposta = confirm("Você tem certeza?");
console.log(resposta); true ou false

prompt(): Exibe uma caixa de entrada para o usuário digitar um valor. Retorna sempre uma string com o valor digitado ou null se o usuário clicar em "Cancelar".
let nome = prompt("Qual é o seu nome?");
console.log(nome); Se o usuário digitar "Alisson", será exibido "Alisson"