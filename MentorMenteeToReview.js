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
