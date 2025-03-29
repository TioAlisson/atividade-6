6. Como podemos converter uma string para número em JavaScript? Dê um exemplo prático.

Para converter uma string para um número em JavaScript, podemos usar algumas abordagens:

1. Usando o Number():
Converte uma string para um número (inteiro ou decimal). Se a string não for um número válido, retorna NaN (Not a Number).

let str = "25";
let num = Number(str);
console.log(num); 25


2. Usando o parseInt():
Converte uma string para um número inteiro. Ele ignora os caracteres após o número válido.

let str = "25px";
let num = parseInt(str);
console.log(num); 25


3. Usando o parseFloat():
Converte uma string para um número decimal (ponto flutuante). Ele também ignora caracteres não numéricos após o número.

let str = "25.67px";
let num = parseFloat(str);
console.log(num); 25.67


Number() converte a string inteira para um número, retornando NaN se a string não for um número válido.
parseInt() converte para inteiro, ignorando caracteres após o número.
parseFloat() converte para decimal, ignorando caracteres não númericos após o número.