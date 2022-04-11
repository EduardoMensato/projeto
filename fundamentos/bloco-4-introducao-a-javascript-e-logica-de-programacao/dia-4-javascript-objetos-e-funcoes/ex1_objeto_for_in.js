let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  /*Imprima no console uma mensagem de boas-vindas para a personagem acima, 
  incluindo seu nome. Valor esperado no console: 
  Bem Vindo, Margarida     */

  console.log('Bem Vindo',info.personagem);

  /* Insira no objeto uma nova propriedade com o nome de chave 'recorrente' 
  e o valor 'Sim' e, em seguida, imprima o objeto no console. */

  info['recorrente'] = 'Sim';

  console.log(info);

  /* Faça um for/in que mostre todas as chaves do objeto.  */

  for(let indice in info){
console.log(indice);
  }


  console.log(" ");
  /* Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */

  for(let indice in info){
    console.log(info[indice]);
      }