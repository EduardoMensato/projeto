/*Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
Por exemplo, a palavra "banana" seria invertida para "ananab". 
Utilize a string abaixo como exemplo, depois troque por outras para verificar 
se seu algoritmo está funcionando corretamente.
*/

let frase = ["b","a","n","a","n","a"];
let inverso = [];


for(let index = 0; index < frase.length; index += 1){
    inverso.unshift(frase[index]);
}
console.log(inverso);