function solution(string) {
    // If the string length is odd, append an underscore
    if (string.length % 2 !== 0) {
      string += '_';
    }
    return splitStrings(string)
  }

  // Split the string into pairs of two characters
  function splitStrings(string){
    const pairs = [];
    for (let i = 0; i < string.length; i += 2) {
      pairs.push(string.substr(i, 2));
    }
  
    return pairs;
    
  }