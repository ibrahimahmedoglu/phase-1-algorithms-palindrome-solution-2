function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Pseudocode:
  - Initialize a startIndex variable to 0.
  - Iterate until the startIndex is less than the length of the word divided by 2.
  - Inside the loop, calculate the endIndex as word.length - 1 - startIndex.
  - Compare the characters at the startIndex and endIndex.
  - If they are not equal, return false (not a palindrome).
  - If the loop completes without finding any unequal characters, return true (palindrome).
*/

/*
  Solution Explanation:
  - The function iterates through the characters of the word using a for loop.
  - It compares the character at the current startIndex with the character at the corresponding endIndex.
  - If any pair of characters is not equal, the function immediately returns false, indicating that the word is not a palindrome.
  - If the loop completes without finding any unequal characters, the function returns true, indicating that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
