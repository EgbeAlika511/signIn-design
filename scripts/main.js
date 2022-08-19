let container = document.querySelector('.container');
let startCountBtn = document.querySelector('.start-counter-btn');
let stopCountBtn = document.querySelector('.stop-counter-btn');
let displayCounterInput = document.querySelector('.display-counter');

let counter = 60;
let timeout;
let timer_on = 0;

function countFunction () {
    displayCounterInput.value = counter;
    counter -= 5;
    timeout = setTimeout(countFunction, 5000);
}

function startCount () {
    if (!timer_on) {
        timer_on = counter
        countFunction()
    }
    if(counter % 2 === 0 || counter % 5 === 0) {
        container.style.backgroundColor = 'yellow';
    }
    if (counter % 5 === 0){
        container.style.backgroundColor = 'green';
    }
    if(counter < 10){
        container.style.backgroundColor = 'red';
    }
    // container.style.backgroundColor = 'hsl(0, 100%, 74%)';
    console.log(counter);
}

function stopCount () {
    clearTimeout(timeout);
    timer_on = 0;
}