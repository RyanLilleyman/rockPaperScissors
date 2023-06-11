//Main function

//Player selection function
 async function playerSelection(){

    //Initialize string as falsy.
    var playerSelect = await new Promise(resolve => {
        const btns = document.querySelectorAll('button');
        btns.forEach(btn => { 
            btn.addEventListener('click', function(e){
                resolve(e.target.getAttribute('title'));
            });
        });
    });

    //Prompt user for rock, paper, or scissors
    // and then convert the string as to help player out with valid input.
    
    console.log(playerSelect)
    playerSelect = playerSelect[0];
    playerSelect = playerSelect.toUpperCase();
    //Correct the string for the user and for future function use.
    if (playerSelect == "R"){
        playerSelect = 0;
    }else if(playerSelect =="P"){
        playerSelect = 1;
    }else if(playerSelect =="S"){
        playerSelect = 2;
    }else if(playerSelect =="L"){
        playerSelect = 3;
    }else{
        playerSelect = 4;
    }
    return playerSelect;
};

//Random integer function
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

//Computer selection function
function computerSelection(){
    let test = getRandomInt(4);
    return test;
}

function game(){
    //I use 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
    let yWin = 0;
    let cWin = 0;
    let tie = 0;
    let repeat = 1;
    while (repeat = 1){
        let pSelect = playerSelection();
        console.log(pSelect);
        let cSelect = computerSelection();
        console.log(cSelect);

        if(pSelect ==4){
            if(cSelect == 4){
                console.log("That was a tie.");
                ++tie;
            }else if(cSelect==3){
                ++cWin;
                console.log("Lizard poisons Spock!");
            }else if(cSelect==2){
                ++yWin;
                console.log("Spock smashes Scissors!");
            }else if(cSelect==1){
                ++cWin;
                console.log("Paper disproves Spock!");
            }else if(cSelect==0){
                ++yWin;
                console.log("Spock vaporizes Rock!");
            };
        }else if(pSelect ==3){
            if(cSelect == 4){
                ++yWin;
                console.log("Lizard poisons Spock!");
            }else if(cSelect==3){
                console.log("That was a tie.");
                ++tie;
            }else if(cSelect==2){
                ++cWin;
                console.log("Scissors decapitates Lizard!");
            }else if(cSelect==1){
                ++yWin;
                console.log("Lizard eats Paper!");
            }else if(cSelect==0){
                ++cWin;
                console.log("Rock crushes Lizard!");
            };
        }else if(pSelect==2){
            if(cSelect == 4){
               ++cWin;
               console.log("Spock smashes Scissors!");
            }else if(cSelect==3){
                ++yWin;
                console.log("Scissors decapitates Lizard!");
            }else if(cSelect==2){
                console.log("That was a tie.")
                ++tie;
            }else if(cSelect==1){
                ++yWin;
                console.log("Scissors cuts Paper!")
            }else if(cSelect==0){
                ++cWin;
                console.log("Rock crushes Scissors!");
            };
        }else if(pSelect==1){
            if(cSelect == 4){
                ++yWin;
                console.log("Paper disproves Spock!");
            }else if(cSelect==3){
                ++cWin;
                console.log("Lizard eats Paper!");
            }else if(cSelect==2){
                ++cWin;
                console.log("Scissors cuts Paper!");
            }else if(cSelect==1){
                console.log("That was a tie.");
                ++tie;
            }else if(cSelect==0){
                ++yWin;
                console.log("Paper covers Rock!");
            };
        }else if(pSelect==0){
            if(cSelect == 4){
                ++cWin;
                console.log("Spock vaporizes Rock!");
            }else if(cSelect==3){
                ++yWin;
                console.log("Rock crushes Lizard!");
            }else if(cSelect==2){
                ++yWin;
                console.log("Rock crushes Scissors!");
            }else if(cSelect==1){
                ++cWin;
                console.log("Paper covers Rock!");
            }else if(cSelect==0){
                console.log("That was a tie.");
                ++tie;
            };
        };

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