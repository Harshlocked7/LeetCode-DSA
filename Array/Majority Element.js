// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//Solution:=Boyer Moore Voting Algorithm
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};

// Example usage:
const nums1 = [3, 2, 3];
const result1 = majorityElement(nums1);
console.log(result1); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
const result2 = majorityElement(nums2);
console.log(result2); // Output: 2

//Time Complexity:= O(n)
//Space COmplexity:= O(1)


