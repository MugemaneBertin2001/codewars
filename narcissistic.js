function isNarcissisticNumber(number) {
  // Convert the number to an array of digits using Array.from and the String constructor
  const digits = Array.from(String(number), Number);

  // Get the number of digits by getting the length of the array
  const numDigits = digits.length;

  // Calculate the sum of the digits raised to the power of the number of digits using reduce and Math.pow
  const sumOfDigitPowers = digits.reduce((sum, digit) => sum + Math.pow(digit, numDigits), 0);

  // Check if the sum of the digit powers is equal to the original number, and return true or false accordingly
  return sumOfDigitPowers === number;
}
