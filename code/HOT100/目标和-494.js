/**
 * https://leetcode.cn/problems/target-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((pre, cur) => pre + cur)
  if ((sum + target) % 2) return 0
  if (Math.abs(target) > sum) return 0
  let left = (sum + target) / 2

  // dp[j] ：  装满容量为 j 的背包， 有 dp[j] 种方法
  const dp = Array(left + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[left]
}
