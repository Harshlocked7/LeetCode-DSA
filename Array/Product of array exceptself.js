// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Solution:= 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const pre = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i-1] === undefined){
            pre[i] = nums[i]
        } else {
            pre[i] = pre[i-1] * nums[i]
        }
    }
    let post = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i+1] === undefined){
        pre[i] = pre[i-1]
        post = nums[i]
        } else {
            pre[i] = (pre[i - 1] === undefined ? 1: pre[i-1]) * post
            post = post * nums[i]
        }
    }
    return pre
   
};
// Time Complexity = O(n)