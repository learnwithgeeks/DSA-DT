// Harmless Ransom Note Algorithm

// Exponential Time Complexity O(n^2)
function harmlessRansomNote(note, magazine) {
  let noteArr = note.split(" ");
  let magazineArr = magazine.split(" ");
  let matchedWords = {};
  for (let i = 0; i < noteArr.length; i++) {
    for (let j = 0; j < magazineArr.length; j++) {
      if (magazineArr[j] === noteArr[i]) {
        if (matchedWords[magazineArr[j]]) {
          return false;
        } else matchedWords[magazineArr[j]] = magazineArr[j];
      }
    }
  }
  return matchedWords;
}
console.log(harmlessRansomNote("a b c", "a b"));
