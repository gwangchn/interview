/**
 * https://leetcode.cn/problems/maximum-product-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function (nums) {
  let min = nums[0]
  let max = nums[0]
  let res = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let _min = min
    let _max = max
    max = Math.max(nums[i] * _max, Math.max(nums[i], _min * nums[i]))
    min = Math.min(nums[i] * _min, Math.min(nums[i], _max * nums[i]))
    res = Math.max(res, max)
  }

  return res
}
