5. Explique o que significa concatenar strings e dê um exemplo utilizando + e template literals.

Concatenar strings significa juntar duas ou mais cadeias de caracteres em uma única. Em JavaScript, isso pode ser feito de duas formas: utilizando o operador + ou template literals (interpolação de strings)

Exemplo 1: Usando o operador +:
let nome = "Alisson";
let idade = 25;
let mensagem = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagem);

Resultado: Meu nome é Alisson e eu tenho 25 anos.


Exemplo 2: Usando template literals (com crase `):
let nome = "Alisson";
let idade = 25;
let mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);

Resultado: Meu nome é Alisson e eu tenho 25 anos.


Concatenar significa unir várias strings, seja utilizando o + para juntar strings de forma simples, ou template literals, que permitem inserir várias variáveis dentro de strings de maneira mais legível e prática.