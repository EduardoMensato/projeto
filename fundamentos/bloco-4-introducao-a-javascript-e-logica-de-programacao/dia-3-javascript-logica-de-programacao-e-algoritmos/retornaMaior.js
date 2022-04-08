//for para pegar a maior string de um array
let haha =['java', 'javascript', 'python', 'html', 'css'];
let resul="";
maior = 0;
for (let i = 0; i < haha.length; i += 1) {
   if (haha[i].length > maior) {
      maior = haha[i].length;
      resul=haha[i];
   }
}
console.log(resul);



//for para pegar o maior numero de um array
let array = [1,4,7,44,56,100,3,35,88];
maior = 0;
for (let i = 0; i < array.length; i += 1) {
   if (array[i] > maior) {
      maior = array[i];
   }
}


console.log(maior);
console.log(" ");

//outra maneira de pegar o maior numero de um array
console.log(Math.max.apply(null, array));



//pegando a pessoa de maior idade
const users = [
    {name: "Matheus", age: 30},
    {name: "João", age: 18},
    {name: "Pedro", age: 44}];

const higherAge = users.reduce(function(prev, current) {
    return (prev.age > current.age) ? prev : current
})

console.log(higherAge); // {age: 44, name: "Pedro"}








