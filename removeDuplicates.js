// ? Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

const removeDuplicates = (numbers) => {
  let unickNumbers = [];
  for(let i = 0; i < numbers.length;  i++){
    if(!unickNumbers.includes(numbers[i])){
      unickNumbers.push(numbers[i]);
    }
  }
  return unickNumbers;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(result);