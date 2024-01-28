// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

//Solution :=
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;
    
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0) {
            if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                count++;
            }
        }
        
        i++;
    }
    
    return count >= n;
}

// Time Complexity:= O(n) where n is flowerbed