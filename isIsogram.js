function isIsogram(str) {
    // Convert the string to lowercase to make the check case-insensitive
    str = str.toLowerCase();
    
    // Create a set to keep track of the letters we've seen
    const seen = new Set();
    
    // Iterate over each letter in the string
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      
      // If we've already seen this letter, the string is not an isogram
      if (seen.has(letter)) {
        return false;
      }
      
      // Otherwise, add the letter to the set of seen letters
      seen.add(letter);
    }
    
    // If we've checked all the letters and haven't found any repeats, the string is an isogram
    return true;
  }

  console.log(isIsogram("The tall deer died here"));
  console.log(isIsogram("my dear!"));