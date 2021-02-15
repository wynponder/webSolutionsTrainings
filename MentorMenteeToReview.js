//Question One:
/* https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/map */

/*Add your code under the animals array and before the line console.log(secretMessage.join(''));*/

/*Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

//What I thought the answer would be
/*const secretMessage = animals.map(function(animal){
  return animal.charAt(0)
});*/

//What the answer actually is
const secretMessage = animals.map(function(animal){
    return animal[0];
  });

  //Question Two:

  //https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/reduce

/* Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers. While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

Add a second argument of 10 to .reduce().*/

/*Why do I need to add a comma before putting 10 and why does the second argument go there? */
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of the accumulator: ', accumulator);
  console.log('The value of the currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
  console.log(newSum);

// Question three: Mini-linter project part four

/*https://www.codecademy.com/courses/introduction-to-javascript/projects/mini-linter*/

/* There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Question one
const storyWords = story.split(' ');

//Question two
//console.log(storyWords.length)

//Question three
const betterWords = storyWords.filter(function(word){
  !unnecessaryWords.includes(word)
  return true;
})

//Question four
//original code I was writing:
/*const VBO = betterWords.foreach(function(word){
  if (overusedWords.includes(word){
    VBO ++
  }
})*/

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

/*Why does the for loop above not have the expected syntax of normal for loops*/
