/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  y = str1.split("").sort();
  z = str2.split("").sort();
  for (i=0; i<y.length; i++) {
    if(y.length===z.length) {
      if (y[i]===z[i]){
        break;
      }
      else {
        break;
      }
    }
    break;
  }
}

module.exports = isAnagram;
