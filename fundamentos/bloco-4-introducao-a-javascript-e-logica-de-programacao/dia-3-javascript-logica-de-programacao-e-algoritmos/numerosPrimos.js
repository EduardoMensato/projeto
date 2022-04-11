
    //function que mostra numeros primos
    function NumerosPrimos(num) {       //abre uma function que recebe um numero
        let numbers = new Array();     //a variável numbers recebe um array vazio
           
        for (var i = 0; i <= num; i++) {   // gera um contador até chegar no numero digitado
          if (Primos(i)){    //chamando outra function
            numbers.push(i);  //insere numero dentro do array
            
          }
        }
        return numbers;
      }
      function Primos(num) {           //abre function que recebe numero digitado
        for(let i = 2; i <num; i++)    //inicia contador
          if(num % i === 0) {          // verifica se o resto da divisao entre numero e contador é zero
              return false             //é falso se resto da divisao for zero
          };
        return num > 1;                //retorna numero onde o resto da divisao maior que 1
      }
       console.log(NumerosPrimos(50));    //mostra numeros primos até 13 mas vc pode alterar numero aqui
      

      /*maior = 0;
for (let i = 0; i < array.length; i += 1) {
   if (array[i] > maior) {
      maior = array[i];
   }
}
 */   