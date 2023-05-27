function DNAStrand(dnaStrand){
    // Define a dictionary of complementary pairs
  const complements = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};

  // Build the complementary strand
  let complementaryStrand = '';
  for (let i = 0; i < dnaStrand.length; i++) {
    const transformed = dnaStrand[i].toUpperCase();
    complementaryStrand += complements[transformed];
  }

  // Return the complementary strand
  return complementaryStrand;
}

console.log(DNAStrand("ttca"))