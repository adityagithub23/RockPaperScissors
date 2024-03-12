let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgCon=document.querySelector(".msg-container");

let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["Rock", "Paper", "Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw. Play Again!";
    msgCon.style.backgroundColor="#081b31";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin)
    {
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}.`;
        msgCon.style.backgroundColor="green";
        msg.style.backgroundColor="green";
        userScore++;
        user.innerText=userScore;
    }
    else{
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}.`;
        msgCon.style.backgroundColor="red";
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock")
        {
            userWin=(compChoice==="Paper")?false:true;
        }
        else if(userChoice==="Paper")
        {
            userWin=(compChoice==="Scissors")?false:true;
        }
        else
        {
            userWin=(compChoice==="Rock")?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
});