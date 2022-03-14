/**
 * https://leetcode-cn.com/problems/triangle/
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) {
  let n = triangle.length
  let dp = triangle[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
};
