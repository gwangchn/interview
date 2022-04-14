/**
 * https://leetcode-cn.com/problems/target-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((pre, sum) => pre + sum)
  const diff = sum - target

  if (diff < 0 || diff % 2 !== 0) {
    return 0
  }

  const neg = diff >> 1
  const dp = new Array(neg + 1).fill(0)

  dp[0] = 1
  for (const num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num]
    }
  }

  return dp[neg]
}
