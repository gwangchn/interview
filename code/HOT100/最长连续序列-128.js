/**
 * https://leetcode.cn/problems/longest-consecutive-sequence/
 *
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
  let set = new Set(nums)
  let res = 0

  for (let item of set) {
    if (!set.has(item - 1)) {
      let len = 0
      let index = item
      while (set.has(index)) {
        len++
        index++
      }
      res = Math.max(res, len)
    }
  }

  return res
}
