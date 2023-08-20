function reverse(word) {
return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word)

  if(word === reversedWord){
    return true
  } else {
    return false
  }
}


/* 
  reverse the input string

  if the input string is the same as the reversed input string
  return true
  else
  return false
*/

/*
  Wrote a function seperately in global to split, reverse, and then rejoin the word.
  After creating that function that word is able to be put into the isPalindrome function and run as normal. 
  The returned function should return true or false based off if the word is a palindrome or not.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
