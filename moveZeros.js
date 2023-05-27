function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[i - count] = arr[i];
      } else {
        count++;
      }
    }
    for (let i = arr.length - count; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }

  const testingZeros = [123,0,0,86,0,0,0,30,43,0]
  console.log(moveZeros(testingZeros));