// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Solution:= 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;

    for(let num of nums){
        if (num <= min) {
            min = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else 
        return true;
    }
    return false
};
// Time Complexity:= O(n)