/**
 * https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let min = Infinity
  let max = -Infinity
  let left = -1
  let right = -1
  let n = nums.length

  for (let i = 0; i < n; i++) {
    if (nums[i] < max) {
      right = i
    } else {
      max = nums[i]
    }
    if (nums[n - i - 1] > min) {
      left = n - i - 1
    } else {
      min = nums[n - i - 1]
    }
  }
  return right === -1 ? 0 : right - left + 1
}
