// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Solution:= 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length < 2) {
        return 0; // Cannot make a profit with less than two prices
    }

    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the current day's price is higher than the previous day, accumulate profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
};

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 7
console.log(maxProfit(prices2)); // Output: 4
console.log(maxProfit(prices3)); // Output: 0
// Time Complexity := O(n)
// Space Complexity:= O(1)