let userChoice;

let coinSides = ['Heads', 'Tails'];

let computerChoice;

let instructionText = document.getElementById("instruction");

let headsButton = document.getElementById("heads");

let tailsButton = document.getElementById("tails");

let computerChoiceText = document.getElementById("computerChoice");

let resultsText = document.getElementById("results");

let playAgainButton = document.getElementById("playAgain");

let coinImage = document.getElementById("image");

let userChoiceText = document.getElementById("userChoice");



function headwon(){

    coinImage.src = "coinheads.jpg";

    coinImage.classList.remove('hidden');

    resultsText.classList.remove('hide');

    resultsText.classList.add('won');

    resultsText.innerHTML = 'Congratulations! You won';

    playAgainButton.classList.remove('hide');


}


function headloss(){
    
    coinImage.src = "cointails.jpg";

    coinImage.classList.remove('hidden');

    resultsText.classList.remove('hide');

    resultsText.classList.add('loss');

    resultsText.innerHTML = 'Oh no! You lost. Better luck next time';

    playAgainButton.classList.remove('hide');

}



function heads(){

    let decider = Math.floor(Math.random()*Math.floor(coinSides.length));
    
    let coinResult = coinSides[decider];

    userChoice = 'Heads';

    computerChoice = 'Tails';

    instructionText.classList.add('hidden');

    headsButton.classList.add('hide');

    tailsButton.classList.add('hide');

    computerChoiceText.classList.remove('hide');

    computerChoiceText.innerHTML = 'The computer chooses ' + computerChoice + '...';

    userChoiceText.classList.remove('hide');

    userChoiceText.innerHTML = 'You chose ' + userChoice;

    if (userChoice == coinResult){


        setInterval(headwon, 3000);


    } else if (computerChoice == coinResult){

        setInterval(headloss, 3000);

    }

}


function tailswon(){

    coinImage.src = "cointails.jpg";

    coinImage.classList.remove('hidden');

    resultsText.classList.remove('hide');

    resultsText.classList.add('won');

    resultsText.innerHTML = 'Congratulations! You won';

    playAgainButton.classList.remove('hide');


}


function tailsloss(){
    
    coinImage.src = "coinheads.jpg";

    coinImage.classList.remove('hidden');

    resultsText.classList.remove('hide');

    resultsText.classList.add('loss');

    resultsText.innerHTML = 'Oh no! You lost. Better luck next time';

    playAgainButton.classList.remove('hide');

}



function tails(){

    let decider = Math.floor(Math.random()*Math.floor(coinSides.length));
    
    let coinResult = coinSides[decider];

    userChoice = 'Tails';

    computerChoice = 'Heads';

    instructionText.classList.add('hidden');

    headsButton.classList.add('hide');

    tailsButton.classList.add('hide');

    computerChoiceText.classList.remove('hide');

    computerChoiceText.innerHTML = 'The computer chooses ' + computerChoice + '...';

    userChoiceText.classList.remove('hide');

    userChoiceText.innerHTML = 'You chose ' + userChoice;

    if (userChoice == coinResult){


        setInterval(tailswon, 3000);


    } else if (computerChoice == coinResult){

        setInterval(tailsloss, 3000);

    }

}



function playAgain(){

    window.location.reload();

}