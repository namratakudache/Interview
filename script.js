let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice")

 let msg=document.querySelector("#msg")

let updateUserScore=document.querySelector("#user-score")
let updateCompScore=document.querySelector("#comp-score")

const GenCompChoice=()=>{
    //rock,paper,scissors
    let options=["rock","paper","scissors"]
    const randomIdx=Math.floor(Math.random()*3)
   return options[randomIdx] 
  
}
const drawGame=()=>{
    console.log("Game was Draw")
    msg.innerText="Game Draw,Play Again"
}

const showWinner=(userWin)=>{
    if(userWin){
          userScore++
          updateUserScore.innerText=userScore
        console.log("You Winn")
        msg.innerText="You Win!"
        msg.style.backgroundColor = "green"
      
    
    }
    else{
        compScore++
        updateCompScore.innerText=compScore
        console.log("You lost.Try Again")
        msg.innerText="You lose, Try Again!"
        msg.style.backgroundColor="red"
       
    }
}
const playGame=(userChoice)=>{
    console.log("userChoice",userChoice)
    //Generate Computer Choice
    const compChoice=GenCompChoice();
    console.log("Comp Choice",compChoice)
    if(userChoice===compChoice){
        //Draw Game
       drawGame()
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){//scissors,paper
             userWin=compChoice==="paper" ? false:true
        }
        else if(userChoice==="paper"){
             userWin=compChoice==="scissors" ? false:true
        }
        else{
             userWin=compChoice==="rock" ? false:true
        }
        showWinner(userWin)
    }


}
choices.forEach((choice)=>{
 const userChoice=choice.getAttribute('id')
    choice.addEventListener("click",()=>{
        // console.log("Choice clicked",userChoice)
        playGame(userChoice)

    })
})