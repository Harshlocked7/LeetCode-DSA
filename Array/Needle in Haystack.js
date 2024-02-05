// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//Solution:=
function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}

// Example usage:
const example1 = strStr("sadbutsad", "sad");
const example2 = strStr("leetcode", "leeto");

console.log(example1); // Output: 0
console.log(example2); // Output: -1
