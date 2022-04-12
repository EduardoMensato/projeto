/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */

let num = [2, 3, 6, 7, 10, 1];
let maior = 0;

function maiorValor() {
    for (let i = 0; i < num.length; i++) {
        for (let index in num) {
            if (num[index] > maior) {
                maior = index;
            }
        }

    }
    console.log(maior);

}
maiorValor();



/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

let array = [2, -4, 6, -7, 10, 0, 3];
let menor = 0;
let numero = 0;


function menorValor() {

    for (let index in array) {
        if (array[index] < menor) {
            menor = array[index];
            numero = array.indexOf(menor);
        }
    }


    console.log(numero);
}
menorValor();


/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

let nomes = ['José', 'Lucas Andrade', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = "";

function nomeMaior() {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].length > maiorNome.length) {
            maiorNome = nomes[i];
        }

    }
    console.log(maiorNome);
}

nomeMaior();


/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

let arrays = [2, 3, 2, 5, 8, 2, 3, 3, 5, 3, 8, 3, 5, 3];

let counter = 0;
let maxCounter = 1;
let posicao = 0;
let contee = 0;

for(let i = 0; i < arrays.length; i++){
    
    for(let j = 0; j < arrays.length; j++){
        if(arrays[i] === arrays[j]){
            counter += 1;
        }
        if(counter > maxCounter){
            maxCounter = counter;
            posicao = j;
        }
    }
    counter = 0;
}
console.log(maxCounter);
console.log("o numero que mais repete é o",arrays[posicao],"que repetiu", maxCounter, "vezes");







//função que remove repetidos em um array
var arr = [2, 3, 2, 5, 8, 2, 3];
var novaArr = arr.filter(function(este, i) {
    return arr.indexOf(este) === i;
});
console.log(novaArr);




