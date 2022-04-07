let pecaXadrez = "reis";

switch (pecaXadrez.toLowerCase()) {
    case "bispo":
        console.log("Avance na diagonal");
        break;
    case "peão":
    case "torre":
        console.log("Avance uma casa a frente");
        break;
    case "cavalo":
        console.log("Avance duas casas ou na horizontal ou na diagonal");
        break;
    case "rei":
    case "rainha":
        console.log("Avance uma casa qualquer");
        break;
    default:
        console.log("Esta peça não faz parte do jogo");
}

//recebe o nome da peça do jogo de xadrez e mostra o proximo passo