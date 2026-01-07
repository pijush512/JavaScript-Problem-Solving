// ? Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

const sumAllNumbers = (numbers) => {
  let sum = 0;

  for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

const result = sumAllNumbers([1, 2, 3, 4]);
console.log(result);