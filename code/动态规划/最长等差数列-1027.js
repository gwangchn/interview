/**
 * https://leetcode-cn.com/problems/longest-arithmetic-subsequence/
 *
 * @param {number[]} nums
 * @return {number}
 */
let longestArithSeqLength = function (nums) {
  const n = nums.length
  const dp = Array.from({ length: n }, _ => new Uint16Array(1001))
  let r = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[j] - nums[i] + 500
      dp[i][d] = Math.max(dp[i][d], dp[j][d] + 1)
      r = Math.max(r, dp[i][d])
    }
  }
  return r + 1
}
