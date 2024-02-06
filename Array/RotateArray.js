//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//Solution:= 
function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than the array length

    const rotatedArray = [...nums.slice(n - k), ...nums.slice(0, n - k)];
    
    // Copy the rotated elements back to the original array
    for (let i = 0; i < n; i++) {
        nums[i] = rotatedArray[i];
    }
}

// Example usage:
const example1 = [1, 2, 3, 4, 5, 6, 7];
const example2 = [-1, -100, 3, 99];

rotate(example1, 3);
rotate(example2, 2);

console.log(example1); // Output: [5, 6, 7, 1, 2, 3, 4]
console.log(example2); // Output: [3, 99, -1, -100]

//Time Complexity := O(n)
//Space Complexity := O(n)