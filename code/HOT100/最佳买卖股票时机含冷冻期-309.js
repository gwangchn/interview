/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let f0 = -prices[0]
  let f1 = 0
  let f2 = 0

  for (let i = 0; i < prices.length; i++) {
    let newf0 = Math.max(f0, f2 - prices[i])
    let newf1 = f0 + prices[i]
    let newf2 = Math.max(f1, f2)
    f0 = newf0
    f1 = newf1
    f2 = newf2
  }

  return Math.max(f1, f2)
}
