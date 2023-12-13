function firstNonRepeatedChar(str) {
  // Create an object to store the count of each character in the string
  const charCount = {};

  // Populate the charCount object by iterating through the string
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // If no non-repeated character is found
}

// Example usage:
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));