// ? Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

const capitalizeFirstLetter = (str) => {
  let words = str.split(" ");
  for(let i = 0; i < words.length; i++) {
    let firstLeeter = words[i][0].toUpperCase();
    let lastPart = words[i].slice(1);

    words[i] = firstLeeter + lastPart;

  }

  return words.join(" ");
}

const result = capitalizeFirstLetter("hello world");
console.log(result);