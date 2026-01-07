// ? Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const evenNumbers = (numbers) => {
  let evenNumbers = [];

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  };
  return evenNumbers;
}

const result = evenNumbers( [1, 2, 3, 4, 5, 6]);
console.log(result);