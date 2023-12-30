 let userScore = 0;
 let computerScore = 0;
 const userScore_span = document.getElementById("user-score");
 const computerScore_span = document.getElementById("computer-score");
 const scoreBoard_div = document.querySelector(".score-board");
 const resultado_p = document.querySelector(".resultado  p");
 const pedra_div = document.getElementById("pedra");
 const papel_div = document.getElementById("papel");
 const tesoura_div = document.getElementById("tesoura");
 
 function getComputerChoice(){
    const chances = ['pedra', 'papel', 'tesoura' ];
    const randomNumber = Math.floor(Math.random() * 3); 
    return chances[randomNumber];    
 }


function win (userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    resultado_p.innerHTML = (userChoice) + " ganha de " + (computerChoice) + " Você ganhou! ";
}

function lose (userChoice, computerChoice){
   computerScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   resultado_p.innerHTML = (userChoice) + " perde " + (computerChoice) + " Você perdeu! ";
}

function empate (userChoice, computerChoice){
    resultado_p.innerHTML = (userChoice) + " Empata com " + (computerChoice) + " Houve um empate!! ";
}

 function game(userChoice) {
   const computerChoice = getComputerChoice(); 
   switch (userChoice + computerChoice) {
    case "pedratesoura":
    case "papelpedra":
    case "pedratesoura":
       win(userChoice, computerChoice);
       break;
    case "pedratesoura":
    case "papelpedra":
    case "tesourapedra":
    lose(userChoice, computerChoice);
        break;
    case "pedrapedra":
    case "papelpapel":
    case "tesouratesoura":
        empate(userChoice, computerChoice);
        break;            
   }
 }


 function main(){
 pedra_div.addEventListener('click', function() {
    game("pedra");
 })
 papel_div.addEventListener('click', function() {
    game("papel");
 })
 tesoura_div.addEventListener('click', function() {
    game("tesoura");
 })
}

main();