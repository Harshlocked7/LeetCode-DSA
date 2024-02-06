// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
//Solution:= 

function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 2; // Maximum allowed occurrences

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Example usage:
const example1 = [1, 1, 1, 2, 2, 3];
const example2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

const k1 = removeDuplicates(example1);
const k2 = removeDuplicates(example2);

console.log(k1, example1.slice(0, k1)); // Output: 5, [1, 1, 2, 2, 3]
console.log(k2, example2.slice(0, k2)); // Output: 7, [0, 0, 1, 1, 2, 3, 3]
//Time Complexity:= O(n)
//Space Complexity := O(1)