let userscore = 0;
let compscore = 0;

const  choices = document.querySelectorAll(".choices");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"]
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
    console.log("game is draw");
}

const playGame =(userChoice)=>{
     console.log("user choice", userChoice);

     const compChoice =genCompChoice();
     console.log("comp choice" ,compChoice);
     if(userChoice === compChoice){
        drawGame();
     }
     else{
        let userWin = true;
     }
};

choices.forEach((choices)=>{
    
    choices.addEventListener("click",()=>{
        const userchoice =choices.getAttribute("id");
        console.log("choice was clicked",userchoice);
    });
});
