// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Solution:= 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length < 2){
    return 0;
    }
    let minPrice = prices[0]
    let maxProfit = 0
    for (i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
};

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfit(prices2)); // Output: 0

//Time Complexity := O(n)
//Space Complexity := O(1)