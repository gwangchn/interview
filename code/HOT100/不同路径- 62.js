/**
 * https://leetcode.cn/problems/unique-paths/
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function (m, n) {
  let ans = 1
  for (let x = n, y = 1; y < m; ++x, ++y) {
    ans = Math.floor((ans * x) / y)
  }
  return ans
}
