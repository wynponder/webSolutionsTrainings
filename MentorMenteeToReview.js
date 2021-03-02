// FEBRUARY 17, 2021
//QUESTION 0NE:
/* Why can't I use return variableName.charAt() in the output:
  const secretMessage = animals.map(function(animal){
    return animal.charAt(0)
    }); 
  */

// LINK TO EXERCISE:
  /* https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/map */

 //EXERCISE INSTRUCTIONS: 

    /*Add your code under the animals array and before the line console.log(secretMessage.join(''));

    Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.*/

    const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

    //What the answer is:

    const secretMessage = animals.map(function(animal){
    return animal[0];
   });



//QUESTION TWO:
    /* Why do I need to add a comma before putting 10 after? And why is the second argument placed where it is? */

//LINK TO EXERCISE:
  /* https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/reduce */ 

//EXERCISE INSTRUCTIONS: QUESTION 4
  /* Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers. While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

  Add a second argument of 10 to .reduce().*/
  
    const newNumbers = [1, 3, 5, 7];

    const newSum = newNumbers.reduce(function(accumulator, currentValue){
      console.log('The value of the accumulator: ', accumulator);
      console.log('The value of the currentValue: ', currentValue);
      return accumulator + currentValue;
    }, 10);
      console.log(newSum);


// MINI-LINTER PROJECT

    //QUESTION THREE:
    /*Why does the for loop in question part four below not have the normal syntax*/

    //QUESTION FOUR:
    /* Confirm syntax is correct in Exercise Part Five below as the example output was different, but we got the same answer (I know there are many ways to get the same answer)*/

    //QUESTION FIVE:
    /* Trying to make the output for Exercise Part Five into a function and save it into a variable called sentenceCount so I can use this in Exercise Part Six but my output gets NaN


// LINK TO EXERCISE: 
  /* https://www.codecademy.com/courses/introduction-to-javascript/projects/mini-linter */

//EXERCISE INSTRUCTIONS:
  /* There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.*/

    let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

      let overusedWords = ['really', 'very', 'basically'];

      let unnecessaryWords = ['extremely', 'literally', 'actually' ];

  //EXERCISE PART ONE
      const storyWords = story.split(' ');

  //EXERCISE PART TWO
      //console.log(storyWords.length)

  //EXERCISE PART THREE
      const betterWords = storyWords.filter(function(word){
        !unnecessaryWords.includes(word)
        return true;
      })

  //EXERCISE PART FOUR

  //QUESTION THREE CODE:
      //original code I was writing - not finished - could I use .forEach?
      /*const VBO = betterWords.foreach(function(word){
        if (overusedWords.includes(word){
          VBO ++
        }
      })*/

    //ACTUAL CODE OUTPUT
      let reallyCount=0;
      let veryCount=0;
      let basicallyCount=0;
      for (word of storyWords){
        if (word ==='really'){
          reallyCount+=1
        } else if (word==='very'){
          veryCount+=1
        } else if (word === 'basically'){
          basicallyCount+=1
        }
      }
      console.log("really count: ", reallyCount);
      console.log("very count: ", veryCount);
      console.log("basically count: ", basicallyCount);

  //EXERCISE PART FIVE: 
    /*INSTRUCTIONS:
    
      Now, count how many sentences are in the paragraph.
      This may seem tricky, but remember that all of the
      sentences in this paragraph end with a period (.) or an
      exclamation mark (!). You could iterate over the array and
      add 1 to a sentence counter variable for each word that
      has a period or exclamation mark as its final character.
    */

    //QUESTION FOUR CODE:
    let exclamationCount=0;
    let periodCount=0;
    for (words of storyWords){
      if (words.includes('!')){
        exclamationCount+=1;
      }else if (words.includes('.')){
        periodCount+=1;
      }
    } console.log('Sentence count: ', periodCount + exclamationCount);


//EXERCISE PART SIX:

  /* INSTRUCTIONS:
    Log these items to the console:

    The word count
    The sentence count
    The number of times each overused word appears
    
    You could choose to simply log them one by one or, for
    a challenge, create a function that logs all of them
    with some formatting.
    */

    //QUESTION FIVE CODE:
   let exclamationCount=0;
   let periodCount=0;
   
   var sentenceCount = function(exlamationCount, periodCount){
     if (storyWords.includes('!')){
       exclamationCount+=1;
     } else if (storyWords.includes('.')){
         periodCount+=1;
       } return (exclamationCount + periodCount);
     }
   
  
    /*var output = function(storyWords,  ){
      console.log("Word Count is: ", storyWords);
      console.log("Sentence count is: ", periodCount + exclamationCount);
      console.log("Overused word count is: ", "Very Count: ", veryCount, "Basically Count: ", basicallyCount, "Really Count: ", reallyCount);
    }

    console.log(output);*/


//NON-EXERCISE RELATED QUESTIONS:
  // Should you do something different than ":sunrise:" each commit?
  // Discuss Higher Order Functions and Callback Functions in JS because they are hella confusing


// MARCH 10, 2021

//Question 1: When to do a console.log in a function and when to do return

//Question 2: module.exports || 
  /* Do you have to use double quotes when using modules? Got an error on exercise 2 of this link because I did single quotes instead of double quotes.
  https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/module-exports-ii  */

  //Question 3: When using require() function to import a module, do you have to use 'const' to set the variable or can you use 'var' or 'let'?
    /* Example: 
        const Airplane = require('./2-airplane.js');
                        OR
        var Airplane = require('./2-airplane.js'); */
