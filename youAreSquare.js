var isSquare = function(n){
    // If n is negative, it cannot be a perfect square
    if (n < 0) {
      return false;
    }
    
    // Take the square root of n
    const sqrtN = Math.sqrt(n);
    
    // Check whether the square root is an integer
    return Number.isInteger(sqrtN);
  };

  console.log(isSquare(40));
  console.log(isSquare(4));