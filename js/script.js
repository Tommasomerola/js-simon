// Generiamo 5 numeri casuali
// parte un timer di 30s, dando all'utente tempo di memorizzarli
// al termine del timer i numeri scompaiono 
// compare un form che permette all utente di inserire i 5 numeri visualizzati
// succesivamente vengono analizzati e messi a confronto con quelli generati
// si dichiara quanti numeri inseriti corrispondono con quelli generati


// Selezione degli elementi di output e input
const outputCountDown = document.getElementById('countdown');
const randomNumber = document.getElementById('numbers-list');
const outputMessage = document.getElementById('message');
const form = document.getElementById('answers-form');
const numField = document.querySelectorAll('input');

// FUNCTION
let numbers = [];

for(let i = 0; i < 5; i++) {

    let number = Math.floor(Math.random() * 50) + 1;
    let newItems = document.createElement("li")
    if(numbers.includes(number)){
        i--;
    }
    else{
        number.push(number);
        newItems.innerText = parseInt(numbers[i]);
        randomNumber.appendChild(newItems);
    }
};
console.log(numbers);