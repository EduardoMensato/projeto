let valorCusto = 300;
let imposto = 20;
let valorVenda = 400;
let valorCustoTotal;
let lucro;

if(valorCusto > 0 && valorVenda > valorCusto){
    valorCustoTotal = imposto / 100;
    valorCustoTotal = valorCustoTotal * valorCusto;
    valorCustoTotal = valorCustoTotal + valorCusto;
valorVenda = valorVenda * 1000;
lucro = valorVenda - (valorCustoTotal * 1000);

}
console.log("O lucro de 1000 peças é de ",lucro)

// calcular o lucro da venda de um produto sendo que vendeu 1000 peças e teve
//uma taxa de 20% em cima do custo da peça..




