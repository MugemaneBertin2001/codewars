// implementing my own split function 
// taking string ans seperator 
// used to split string into an array
function mySplit(str, separator) {
    // array to hold all substring
  const result = [];
  // temporary variable to store current substring before thes seperator is reached
  let current = '';
  // iterating through characters made up passed string
  for (let i = 0; i < str.length; i++) {

    // if current character is the same as seperator the current substring will be pushed to result
    // and the current tempoaray variable will be empted
    // else the the characher at this index will be incrementd on current variable
    if (str[i] === separator) {
      result.push(current);
      current = '';
    } else {
      current += str[i];
    }
  }
  // finaly if iteration end the value in current variable will be pushed too
  // in our result array
  result.push(current);
  return result; // return our result
}

const testString = "Our first on-site session was amazing";
console.log(mySplit(testString," "));