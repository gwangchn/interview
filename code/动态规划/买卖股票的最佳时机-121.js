/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let dp = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > dp) dp = prices[i] - min
    if (prices[i] < min) min = prices[i]
  }

  return dp
};
