/**
 * https://leetcode.cn/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  let ans = 0
  for (const num of nums) {
    ans ^= num
  }
  return ans
}
