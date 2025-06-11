
let h1 = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

let timeAllowed = 10;
h1.textContent = `${timeAllowed} seconds`;

startButton.addEventListener('click', countdown);

function countdown() {
let timerID = setInterval(() => {
    if(timeAllowed >= 1) {
        timeAllowed--
        h1.textContent =  `${timeAllowed} seconds`
    }
    else {
        setTimeout(
            clearInterval(timerID))
            h1.textContent = "Time's up"
    }
    }, 1000);


}


