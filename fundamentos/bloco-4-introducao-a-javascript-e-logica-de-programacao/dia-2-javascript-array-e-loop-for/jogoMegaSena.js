//confere o resultado do jogo com o sorteio e mostra o numero de acertos

let jogo = [10, 20, 30, 40, 50, 60];

let sorteio = [11, 20, 33, 50, 60];
let resultado = 0;

for (let index = 0; index < jogo.length; index += 1) {

    for (let index2 = 0; index2 < sorteio.length; index2 += 1) {
        if (jogo[index] == sorteio[index2]) {
            resultado = resultado + 1;
        }
    }

}
console.log(resultado);