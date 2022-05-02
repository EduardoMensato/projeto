
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* O objetivo destes exercícios é colocar em prática o que você aprendeu sobre DOM, seletores, manipulação de elementos HTML e Eventos em JavaScript . Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido no arquivo "scripts.js".
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
 */

/* Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
Copiar */



function createDays() {

    const DaysList = document.querySelector('#days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const day = dezDaysList[index];
        const dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        dayItem.className += "day";
        if (day == 24 || day == 25 || day == 31) {
            dayItem.className += " holiday";
        }
        if (day == 4 || day == 11 || day == 18) {
            dayItem.className += " friday";

        }



        DaysList.appendChild(dayItem);
    };
};

createDays();

/* Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */

const feriado = document.querySelector('.buttons-container');
const botao = document.createElement('button');
botao.id = "btn-holiday";
botao.innerText = "Feriado";
feriado.appendChild(botao);

/* Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */

const Campoferiado = document.querySelectorAll('.holiday');
const btn = document.querySelector("#btn-holiday");
for (let index = 0; index < Campoferiado.length; index += 1) {
    let numero = Campoferiado[index];
    btn.addEventListener("click", function () {
        if (numero.style.backgroundColor == "orange") {
            numero.style.backgroundColor = "#eee";
        } else {
            numero.style.backgroundColor = "orange";
        }


    });

}



/* Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e 
crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

const sexta = document.querySelector('.buttons-container');
const botaoFriday = document.createElement('button');
botaoFriday.id = "btn-friday";
botaoFriday.innerText = "Sexta-Feira";
sexta.appendChild(botaoFriday);

/* Exercício 5:

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" 
que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. 
Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 */
const CampoSexta = document.querySelectorAll('.friday');
const btnSexta = document.querySelector("#btn-friday");
let array = [];
for (let index = 0; index < CampoSexta.length; index += 1) {
    if (isNaN(CampoSexta[index].innerText) == false) { // Compara se é numero
        array.push(CampoSexta[index].innerText);    //Adiciona itens no array
    }

    btnSexta.addEventListener("click", function () {
        if (CampoSexta[index].innerText == "Obaa!") {
            CampoSexta[index].innerText = array[index]; //retorna os numeros dentro do array
        } else {
            CampoSexta[index].innerText = "Obaa!";
        }

    });

}



/* Exercício 6:

Implemente duas funções que criem um efeito de "zoom". 
Ao passar o ponteiro do mouse em um dia do mês no calendário, 
o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, 
o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */
let dia = document.querySelectorAll(".day");

function zoom() {

    for (let i = 0; i < dia.length; i++) {
        dia[i].addEventListener("mouseover", function () {
            dia[i].style.fontSize = "30px";

        })
        dia[i].addEventListener("click", function () {

            selecionaDia(dia[i]);
        })
    }
}
zoom();

function Semzoom() {

    for (let i = 0; i < dia.length; i++) {
        dia[i].addEventListener("mouseout", function () {
            dia[i].style.fontSize = "20px";
        })
    }
}
Semzoom();

/* Exercício 7:

Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> 
que possui a classe "my-tasks" .
 */
const tarefa = document.querySelector('.my-tasks');
const span1 = document.createElement('span');
function MinhaTarefa(obj) {


    span1.innerText = obj;
    tarefa.appendChild(span1);
}
MinhaTarefa("Cozinhar");

/* Exercício 8:

Implemente uma função que adiciona uma legenda com cor para a tarefa 
criada no exercício anterior. Esta função deverá receber como parâmetro uma string 
("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> 
que possui a classe "my-tasks" .
 */
const legenda1 = document.querySelector('.my-tasks');
const div1 = document.createElement('div');
function legenda(obj) {

    div1.style.backgroundColor = obj;
    div1.className = "task";
    legenda1.appendChild(div1);
}
legenda("yellow");

/* Exercício 9:

Implemente uma função que adiciona um evento que, ao clicar no elemento 
com a tag <div> referente a cor da sua tarefa, atribua a este elemento a 
classe task selected , ou seja, quando sua tarefa possuir a classe task selected , 
ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , 
ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
 */
const legenda2 = document.querySelector('.task');
function seleciona() {

    legenda2.addEventListener("click", function () {
        if (legenda2.className == "task") {
            legenda2.className = "task selected";
        } else {
            legenda2.className = "task";
        }

    })
}
seleciona();

/* Exercício 10:

Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, 
atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração 
inicial rgb(119,119,119) .
 */
function selecionaDia(objeto) {
    if (legenda2.className == "task selected") {
        objeto.style.backgroundColor = div1.style.backgroundColor;
    }
}

/* Bônus:

Vamos adicionar compromissos ao seu calendário? Implemente uma função que, 
ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista 
"MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert 
com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key . */

const BotaoAdicionar = document.querySelector('#btn-add');
const textoCompromisso = document.getElementById('task-input');
function compromisso() {
    BotaoAdicionar.addEventListener("click", function () {
        if (textoCompromisso.value == '') {
            alert('Campo compromisso vazio')
        } else {
            MinhaTarefa(textoCompromisso.value);
            legenda("blue");
        }


    })

}
compromisso();




