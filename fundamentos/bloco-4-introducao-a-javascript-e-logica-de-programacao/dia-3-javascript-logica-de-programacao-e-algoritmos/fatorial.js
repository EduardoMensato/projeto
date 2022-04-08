/*O fatorial é a multiplicação de um número natural pelos seus antecessores, 
exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let numero = 10;
let array =[];
let soma=1;
let resul=0;

for(let indice = numero; indice > 0; indice -=1){
array.push(indice);
soma += numero * (indice - 1);

}

console.log(array," = ", soma - 1);