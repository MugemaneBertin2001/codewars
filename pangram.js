function isPangram(string){
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }

  console.log(isPangram('42424'))
  console.log(isPangram('The quick brown fox jumps over the lazy dog.'))