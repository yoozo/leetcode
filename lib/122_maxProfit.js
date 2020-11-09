// 122. 买卖股票的最佳时机 II. 
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length
    if (len < 2) {
        return 0
    }
    // 下一天的金额
    let next = prices[len - 1]
    let shouyi = 0
    for (let i = len - 2; i >= 0; i--) {
        // 比最大值大的时候，要
        shouyi += next - prices[i] > 0 ? next - prices[i] : 0

        // 向前移动
        next = prices[i]
    }
    return shouyi
};

// console.log(maxProfit([7, 6, 4, 3, 1]));


/**
 * 扩展 如果只可以一次买卖的情况
 * @param {*} prices 
 */
var maxProfitByOne = function (prices) {
    const len = prices.length
    if (len < 2) {
        return 0
    }
    // 下一天的金额
    let next = prices[len - 1]
    let shouyi = 0
    let max = 0
    for (let i = len - 2; i >= 0; i--) {
        // 比最大值大的时候，要
        if (next - prices[i] > 0) {
            shouyi += next - prices[i]
        } else {
            shouyi = 0
        }

        if (shouyi > max) {
            max = shouyi
        }
        // 向前移动
        next = prices[i]
    }
    return max
}

console.log(maxProfitByOne([7, 1, 5, 3, 6, 4]));
