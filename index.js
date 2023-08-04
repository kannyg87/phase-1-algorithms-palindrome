function isPalindrome(word) {
  // Write your algorithm here
   const reverseWord = word.split("").reverse().join( "" )
   if (reverseWord === word){
    return true
   } else {
    return false
   }
}

/* 
  Add your pseudocode here
  first we declare a variable and apply split method and reverse the join them,
  after that check if it is equal to the word that is passed as an argument then true, else return false 
*/

/*
  Add written explanation of your solution here
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
