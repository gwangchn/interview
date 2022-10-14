/**
 * https://leetcode.cn/problems/increasing-triplet-subsequence/description/?favorite=2ckc81c
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const n = nums.length

  if (n < 3) return false

  let first = nums[0]
  let second = Infinity

  for (let i = 0; i < n; i++) {
    if (nums[i] > second) {
      return true
    } else if (nums[i] > first) {
      second = nums[i]
    } else {
      first = nums[i]
    }
  }

  return false
}
