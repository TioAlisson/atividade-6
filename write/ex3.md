3. O que acontece quando usamos o método prompt()? Qual tipo de dado ele retorna?

O método prompt() exibe uma caixa de entrada para o usuário digitar um valor. Ele retorna sempre uma string com o que foi digitado, ou null se o usuário clicar em "Cancelar". 

let nome = prompt("Qual é o seu nome?");
console.log(nome); Se o usuário digitar "Alisson", será exibido "Alisson"

let idade = prompt("Quantos anos você tem?");
console.log(idade); Mesmo que o usuário digite 21, será exibido "21" (como string)