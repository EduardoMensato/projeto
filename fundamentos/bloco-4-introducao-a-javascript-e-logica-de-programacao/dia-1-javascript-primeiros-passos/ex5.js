const a = 50;
const b = 80;
const c=70;
let resul;

if(a + b + c == 180){
    resul = true;
}else if(a + b + c < 180){
    resul = false;
}else{
    resul = "Erro ao calcular";
}

console.log(resul);

//verifica se o triangulo tem 180 graus.