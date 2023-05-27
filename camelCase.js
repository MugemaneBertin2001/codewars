function toCamelCase(str) {
    // Split the input string into words
    let words = str.split(/[_-]/);
    
    // Capitalize each word after the first
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back together in camelCase
    return words.join('');
  }

  console.log(toCamelCase('camel_case'))