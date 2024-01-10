

async function playerInput(input){
    var computerInput = Math.floor(Math.random() * 3) + 1;
    var resultArea = document.getElementById("result");
    var resetBtn = document.getElementById("reset");
    resetBtn.disabled = true;


    for(var i = 0; i <= 6; i++){
        await new Promise(resolve => setTimeout(resolve, 1000));
        if(i === 0){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING</h2>";
        }
        else if(i === 1){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING.</h2>";
        }
        else if(i === 2){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING..</h2>";
        }
        else if(i === 3){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING...</h2>";
        }
        else if(i === 4){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING.</h2>";
        }
        else if(i === 5){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING..</h2>";
        }
        else if(i === 6){
            resultArea.innerHTML = "<h2>ENEMY CHOOSING...</h2>";
        }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    if(computerInput === 1){    

        resultArea.innerHTML = "<h2>ROCK</h2>";
    }
    else if(computerInput === 2){

        resultArea.innerHTML = "<h2>PAPER</h2>";
    }
    else if(computerInput === 3){
        resultArea.innerHTML = "<h2>SCISSOR</h2>";
    }

    await new Promise(resolve => setTimeout(resolve, 3000));


    if(input === computerInput){
        resultArea.innerHTML = "<h2>DRAW</h2>";
    }
    else if(input === 1 && computerInput === 2){
        resultArea.innerHTML = "<h2>YOU LOSE</h2>";
    }
    else if(input === 1 && computerInput === 3){
        resultArea.innerHTML = "<h2>YOU WIN</h2>";
    }
    else if(input === 2 && computerInput === 1){
        resultArea.innerHTML = "<h2>YOU WIN</h2>";
    }
    else if(input === 2 && computerInput === 3){
        resultArea.innerHTML = "<h2>YOU LOSE</h2>";
    }
    else if(input === 3 && computerInput === 1){
        resultArea.innerHTML = "<h2>YOU LOSE</h2>";
    }
    else if(input === 3 && computerInput === 2){
        resultArea.innerHTML = "<h2>YOU WIN/h2>";
    }
    else{
        resultArea.innerHTML = "<h2>ERROR PLEASE RESTART/h2>";
    }

    resetBtn.disabled = false;
}

function reset(){
    var resultArea = document.getElementById("result");
    resultArea.innerHTML = "<h2>CHOOSE YOUR WEAPON</h2>";
}

