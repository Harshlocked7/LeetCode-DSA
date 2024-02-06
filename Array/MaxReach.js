// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

//Solution := 
function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; // If you can't reach the current index, return false
        }

        maxReach = Math.max(maxReach, i + nums[i]);

        if (maxReach >= nums.length - 1) {
            return true; // If you can reach or go beyond the last index, return true
        }
    }

    return false;
}

// Example usage:
const example1 = [2, 3, 1, 1, 4];
const example2 = [3, 2, 1, 0, 4];

console.log(canJump(example1)); // Output: true
console.log(canJump(example2)); // Output: false



 