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

async function game(){
    //I use 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
    let yWin = 0;
    let cWin = 0;
    let tie = 0;
    let repeat = 1;
    const div = document.querySelector('.text-box');
    const yScore = document.querySelector('.yWin');
    const cScore = document.querySelector('.cWin')
    while (repeat = 1){
        let pSelect = await playerSelection();
        console.log(pSelect);
        let cSelect = computerSelection();
        console.log(cSelect);

        if(pSelect ==4){
            if(cSelect == 4){
                div.textContent ="That was a tie.";
                ++tie;
            }else if(cSelect==3){
                ++cWin;
                div.textContent ="Lizard poisons Spock!";
            }else if(cSelect==2){
                ++yWin;
                div.textContent ="Spock smashes Scissors!";
            }else if(cSelect==1){
                ++cWin;
                div.textContent ="Paper disproves Spock!";
            }else if(cSelect==0){
                ++yWin;
                div.textContent ="Spock vaporizes Rock!";
            };
        }else if(pSelect ==3){
            if(cSelect == 4){
                ++yWin;
                div.textContent ="Lizard poisons Spock!";
            }else if(cSelect==3){
                div.textContent ="That was a tie.";
                ++tie;
            }else if(cSelect==2){
                ++cWin;
                div.textContent ="Scissors decapitates Lizard!";
            }else if(cSelect==1){
                ++yWin;
                div.textContent ="Lizard eats Paper!";
            }else if(cSelect==0){
                ++cWin;
                div.textContent ="Rock crushes Lizard!";
            };
        }else if(pSelect==2){
            if(cSelect == 4){
               ++cWin;
               div.textContent ="Spock smashes Scissors!";
            }else if(cSelect==3){
                ++yWin;
                div.textContent ="Scissors decapitates Lizard!";
            }else if(cSelect==2){
                div.textContent ="That was a tie."
                ++tie;
            }else if(cSelect==1){
                ++yWin;
                div.textContent ="Scissors cuts Paper!";
            }else if(cSelect==0){
                ++cWin;
                div.textContent ="Rock crushes Scissors!";
            };
        }else if(pSelect==1){
            if(cSelect == 4){
                ++yWin;
                div.textContent ="Paper disproves Spock!";
            }else if(cSelect==3){
                ++cWin;
                div.textContent ="Lizard eats Paper!";
            }else if(cSelect==2){
                ++cWin;
                div.textContent ="Scissors cuts Paper!";
            }else if(cSelect==1){
                div.textContent ="That was a tie.";
                ++tie;
            }else if(cSelect==0){
                ++yWin;
                div.textContent ="Paper covers Rock!";
            };
        }else if(pSelect==0){
            if(cSelect == 4){
                ++cWin;
                div.textContent ="Spock vaporizes Rock!";
            }else if(cSelect==3){
                ++yWin;
                div.textContent ="Rock crushes Lizard!";
            }else if(cSelect==2){
                ++yWin;
                div.textContent ="Rock crushes Scissors!";
            }else if(cSelect==1){
                ++cWin;
                div.textContent ="Paper covers Rock!";
            }else if(cSelect==0){
                div.textContent ="That was a tie.";
                ++tie;
            };
        };

        yScore.textContent = yWin.toString();
        cScore.textContent = cWin.toString();
        if(yWin == 5 || cWin == 5){
            repeat = 0;
            break
        }else{
            repeat = 1;
        }
    }
    if(yWin>cWin){
        div.textContent = 'You Win!';
    }else if(cWin>yWin){
        div.textContent = 'You Lose!';
    }

}

function Main(){
    game();
}

Main();