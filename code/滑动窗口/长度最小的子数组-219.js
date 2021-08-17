// https://leetcode-cn.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function(target, nums) {
  const l = nums.length
  let left = 0
  let right = -1
  let sum = 0
  let res = Infinity

  while(left < l) {
    if (sum < target) {
      sum += nums[++right]
    } else {
      sum -= nums[left]
      ++left
    }
    if (sum >= target) res = Math.min(res, right - left + 1)
  }

  return res === Infinity ? 0 : res
}
