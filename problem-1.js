// ? Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reverseString = (str) => {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversed = reversed + str[i];
  }
  return reversed;
}

const result = (reverseString ("hello")) ;
console.log(result);