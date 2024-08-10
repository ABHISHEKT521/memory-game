var playerChoice=document.getElementById("playerchoice");
var computerChoice=document.getElementById("computerchoice");
var resultview=document.getElementById("result");


var possibleChoices=document.querySelectorAll('button');

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',
    (e)=>{
        playerselection=e.target.id;
        playerChoice.innerHTML=playerselection;
        botchoice();
        results()

    }
))

function botchoice(){
    var randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber === 1)
    {
        bot="ROCK";
    }
    if(randomNumber===2)
    {
        bot="PAPER";
    }
    if(randomNumber===3)
    {
        bot="SCISSORS"
    }
    computerChoice.innerHTML=bot;

}

function results(){
    if(playerselection===bot){
        result="  OOPS,IT'S A TIE. TRY AGAIN"
    }
    if(playerselection==="ROCK"&&bot==="PAPER"){
        result="Bot Wins"
    }
    if(playerselection==="SCISSORS"&&bot==="ROCK"){
        result="Bot Wins"
    }
    if(playerselection==="PAPER"&&bot==="SCISSORS"){
        result="Bot Wins"
    }
    

    if(playerselection==="PAPER"&&bot==="ROCK"){
        result="Player Wins"
    }
    if(playerselection==="ROCK"&&bot==="SCISSORS"){
        result="Player Wins"
    }
    if(playerselection==="SCISSORS"&&bot==="PAPER"){
        result="Player Wins"
    }
    resultview.innerHTML=result;
}