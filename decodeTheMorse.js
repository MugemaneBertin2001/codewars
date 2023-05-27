const MORSE_CODE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '--..--': ',', // comma
    '.-.-.-': '.', // period
    '..--..': '?', // question mark
    '-.-.--': '!', // exclamation point
    '-..-.': '/',  // slash
    '-.--.': '(',  // left parenthesis
    '-.--.-': ')',  // right parenthesis
    '.-...': '&',  // ampersand
    '---...': ':',  // colon
    '-.-.-.': ';',  // semicolon
    '-...-': '=',  // equals sign
    '.-.-.': '+',  // plus sign
    '-....-': '-', // hyphen
    '..--.-': '_', // underscore
    '.-..-.': '"', // double quotation mark
    '.--.-.': '@', // at symbol
    '...-..-': '$', // dollar sign
    '.----.': '\'', // apostrophe
    '-.--.': '{', // left curly brace
    '}': '-.--.-', // right curly brace
    '-..--.': '/', // fraction bar
    '.-.-': '\n', // newline character
    '......': '_', // error or invitation to transmit
    '-.-.-': '', // invitation to transmit
    '........': '', // error
  };
  

// decoding morse letter to actuall letter  
function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
// using decodeMorse to decode word as whole
  function decodeMorseWord(word) {
    const wordSplit = word.split(' ');
    const decodedLetters = wordSplit.map(decodeMorseLetter);
    const result = decodedLetters.join('')
    return result;
  }
// using decodeMorseWord to decode all string as whole
decodeMorse = function(morseCode){
    const trimmedContent = morseCode.trim();
    const splitTrimmedContent = trimmedContent.split('   ');
    const decodeContent = splitTrimmedContent.map(decodeMorseWord);

    return decodeContent.join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse('   .... . -.--   '))