//Main function

//Player selection function
function playerSelection(){

    //Initialize string as falsy.
    var playerSelect = '';

    //Prompt user for rock, paper, or scissors
    // and then convert the string as to help player out with valid input.
        playerSelect = prompt("Enter Rock, Paper or Scissors.");
        playerSelect = playerSelect.toUpperCase();
        playerSelect = playerSelect[0];

    //Correct the string for the user and for future function use.
    if (playerSelect =="R"){
        playerSelect = 0;
    }else if(playerSelect =="P"){
        playerSelect = 1;
    }else if(playerSelect =="S"){
        playerSelect = 2;
    }

    return playerSelect;
}

//Random integer function
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

//Computer selection function
function computerSelection(){
    let test = getRandomInt(3);
    return test;
}

function game(){
    //I use 0 = Rock, 1 = Paper, and 2 = Scissors
    let yWin = 0;
    let cWin = 0;
    let tie = 0;
    let repeat = 1;
    while (repeat = 1){
        let pSelect = playerSelection();
        console.log(pSelect);
        let cSelect = computerSelection();
        console.log(cSelect);
        if(pSelect ==2){
            if(cSelect==1){
                ++yWin;
                console.log(yWin,"You Won! Scissors beats Paper.");
            }else if(cSelect==0){
                ++cWin;
                console.log(cWin,"You Lost! Rock beats Scissors.");
            }else if(cSelect==2){
                ++tie;
                console.log("That was a Tie!");
            }
        }else if(pSelect==1){
            if(cSelect==2){
                ++cWin;
                console.log(cWin,"You Lost! Scissors beats Paper.");
            }else if(cSelect==0){
                ++yWin;
                console.log(yWin,"You Won! Paper beats Rock.");
            }else if(cSelect==2){
                ++tie;
                console.log("That was a Tie!");
            }
        }else if(pSelect==0){
            if(cSelect==1){
                ++cWin;
                console.log(cWin,"You Lost! Paper beats Rock.");
            }else if(cSelect==2){
                ++yWin;
                console.log(yWin,"You Won! Rock beats Scissors.");
            }else if(cSelect==2){
                ++tie;
                console.log("That was a Tie!");
            }
        }
        if(yWin == 5 || cWin == 5){
            repeat = 0;
            break
        }else{
            repeat = 1;
        }
    }
    if(yWin>cWin){
        console.log("You Win!");
    }else if(cWin>yWin){
        console.log("You Lost!");
    }

}

function Main(){
    game();
}

Main();