// implementing my own join function
// take array and seperator 
// then retrun a string from joined array elements
function myJoin(arr, separator) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i !== arr.length - 1) {
        result += separator;
      }
    }
    return result;
  }

  const testArray = ['My', 'name','is','__________']

  console.log(myJoin(testArray," "))