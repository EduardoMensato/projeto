let nota =-9;

if(nota >= 90){
    console.log("Sua nota foi A");
}else if(nota >= 80 && nota < 90){
    console.log("Sua nota foi B");
}else if(nota >= 70 && nota < 80){
    console.log("Sua nota foi C");
}else if(nota >= 60 && nota < 70){
    console.log("Sua nota foi D");
}else if(nota >= 50 && nota < 60){
    console.log("Sua nota foi E");
}else if(nota > 0 && nota < 50){
    console.log("Sua nota foi F");
}else{
    console.log("Esta Nota não existe");
}

// converte nota em porcentagem em letra