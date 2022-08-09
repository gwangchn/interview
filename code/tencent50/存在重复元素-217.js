/**
 * https://leetcode.cn/problems/contains-duplicate/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map()

  for (n of nums) {
    if (map.has(n)) return true
    map.set(n, true)
  }

  return false
}
