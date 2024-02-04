// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);

        if (prefix === "") {
            break;
        }
    }

    return prefix;
}

// Example usage:
const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(example1)); // Output: "fl"
console.log(longestCommonPrefix(example2)); // Output: ""

//Time Complexity: O(n * minLen)
//Space Complexity: O(minLen)