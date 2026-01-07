// ?Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

const maximumNumber = (numbers) => {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};
const result = maximumNumber([5, 1, 9, 3]);
console.log(result);
