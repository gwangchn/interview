/**
 * https://leetcode.cn/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let pre = 0
  let maxAns = nums[0]

  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    maxAns = Math.max(maxAns, pre)
  }

  return maxAns
}
