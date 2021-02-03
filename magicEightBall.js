//Question 1
var userName = ""
//Question 2
userName ? console.log('Hello'+' '+ 'userName') : console.log('Hello');
//Question 3
var userQuestion = "Will 2021 be great?"
//Question 4
console.log(userQuestion+' '+userName);
//Question 5
var randomNumber = Math.floor(Math.random()*8)
//Question 6
var eightBall = ''
//Question 7
/*if (randomNumber == 0){
  console.log(eightBall='It is certain');
} else if (randomNumber==1){
  console.log('It is decidedly so');
} else if (eightBall==2){
  console.log('Reply hazy, try again');
} else if (eightBall==3){
  console.log('Cannot predict now');
} else if (eightBall==4){
  console.log('Do not count on it');
} else if (eightBall==5){
  console.log('My sources say no');
} else if (eightBall==6){
  console.log('Outlook not so good');
} else if (eightBall==7){
  console.log('Signs point to yes');
}*/

switch(randomNumber){
  case 0:
    eightBall='Fasho';
    break;
  case 1:
    eightBall='Like, whatever';
    break;
  case 2:
    eightBall='You know it';
    break;
  case 3:
    eightBall='YAS QWEEEEEN';
    break;
  case 4:
    eightBall='Funkadelic';
    break;
  case 5:
    eightBall='Okurrr';
    break;
  case 6:
    eightBall='Obvi';
    break;
  case 7:
    eightBall='Damn straight';
    break;
  case 8:
    eightBall='Absolutely';
    break;
}


console.log(`The eight ball answered: ${eightBall}`);
