// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 //Solution :=
 /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArray = s.split('');
    let i = 0;
    let j = sArray.length - 1;

    while (i < j) {
        while (i < j && !vowels.has(sArray[i])) {
            i++;
        }
        while (i < j && !vowels.has(sArray[j])) {
            j--;
        }
        if (i < j ) {
            //switch vpwels at position i and j
            [sArray[i], sArray[j]] = [sArray[j], sArray[i]]
            i++;
            j--;
        }
    }
    return sArray.join('')
};

