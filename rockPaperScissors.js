const getUserChoice = (userInput) =>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock'||'paper'||'scissors'){
    return userInput;
  }else {
    console.log( 'Invalid choice. Please select rock, paper, or scissors.');
  }
};

/*function getComputerChoice(){
  console.log(Math.floor(Math.random()*3));
  if(){
    return 'rock';
  } else if (1){
    return 'paper';
  } else if(2){
    return 'scissors';
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());*/

/*const getComputerChoice = ()=>{
  var randomNumber = 
    Math.floor(Math.random()*3)
  if(randomNumber===0){
    console.log('rock');
  }else if (randomNumber===1){
    console.log('paper');
  } else if (randomNumber===2){
    console.log('scissors');
  }
};*/

const getComputerChoice = ()=>{
  var randomNumber = 
    Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';}
};

const determineWinner = (userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    return 'It\'s a tie!';
  } 
  if(userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'Computer wins!';
    }else {
      return 'User wins!';
    }
  } if(userChoice==='paper'){
    if (computerChoice==='scissors'){
      return 'Computer wins!';
    }else {
      return 'User wins!';
    }
  } if(userChoice==='scissors'){
    if (computerChoice==='rock'){
      return 'Computer wins!';
    }else {
      return 'User wins!';
    }
  }
};

const playGame=()=>{
  const userChoice=getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

console.log(playGame());
console.log(playGame());
