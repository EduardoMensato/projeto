let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


console.log("Exercicio 1");
console.log(" ");
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let numero of numbers) {
    console.log(numero);
}



//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log(" ");
console.log("Exercicio 2");
let soma = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {

    soma = soma + numbers[indice];

}
console.log(soma);


//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de 
//elementos.
//Caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
//"valor menor ou igual a 20";
console.log(" ");
console.log("Exercicio 3");
let media = 0;
soma = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {

    soma = soma + numbers[indice];
    media = soma / numbers.length

}
if (media > 20) {
    console.log(media, " O valor é maior que 20");
} else {
    console.log(media, " O valor é menor que 20");
}







//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log(" ");
console.log("Exercicio 5");
let maior = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] > maior) {
        maior = numbers[indice];
    }
}
console.log("O maior valor do array é ", maior);


//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log(" ");
console.log("Exercicio 6");
let impar = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] % 2 == 1) {
        impar = impar + 1;
    }
}
if (impar == 0) {
    console.log("não tem numeros impares");
}else{
    console.log("A quantidade de numeros impares é de  ", impar);
}



//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log(" ");
console.log("Exercicio 7");
let menor = numbers.length -1;
for (let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] < menor) {
        menor = numbers[indice];
    }
}
console.log("O menor valor do array é ", menor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

//Utilizando o array criado no exercício anterior imprima o resultado da divisão 
//de cada um dos elementos por 2 .

let numerosArray = [1,2,3,4,5,6,7,8,9,10];
for (let indice = 0; indice < numerosArray.length; indice += 1){
console.log(numerosArray[indice], " / 2 = ",numerosArray[indice] / 2)
}