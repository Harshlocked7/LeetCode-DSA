// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 
//Solution := 
var lengthOfLastWord = function(s) {
    // Trim any leading or trailing spaces
    s = s.trim();

    // Check if the string is empty after trimming
    if (s === '') {
        return 0;
    }

    // Split the string into an array of words
    const words = s.split(' ');

    // Return the length of the last word in the array
    return words[words.length - 1].length;
};
console.log(lengthOfLastWord("Hello World"));  // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));  // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy"));  // Output: 6

//Time Complexity := O(n+m)
//Space Complexity := O(n+m)