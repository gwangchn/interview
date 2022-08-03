/**
 * https://leetcode.cn/problems/daily-temperatures/
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const stack = []
  const ans = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const pre = stack.pop()
      ans[pre] = i - pre
    }
    stack.push(i)
  }

  return ans
}
