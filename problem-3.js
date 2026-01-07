// ? Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const Palindrome = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
};

const result = (Palindrome("madam"));
console.log(result);

console.log(Palindrome("hello"));
