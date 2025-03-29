7. Qual a importância do toFixed(n) quando lidamos com operações matemáticas?

O método toFixed(n) é importante em operações matemáticas porque permite formatar números com um número específico de casas decimais. Isso ajuda a controlar a precisão e a exibição consistente dos resultados, especialmente em contextos financeiros.

Exemplo:
let preco = 10.6789;
let precoFormatado = preco.toFixed(2);
console.log(precoFormatado); "10.68" 


toFixed(n) ajuda a evitar arredondamentos inesperados e a exibir os números de maneira mais clara. ele retorna uma string, então, se necessário, converta de volta para número usando parseFloat() ou Number().