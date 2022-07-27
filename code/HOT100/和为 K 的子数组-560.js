/**
 * https://leetcode.cn/problems/subarray-sum-equals-k/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]])
  let cur = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    cur += nums[i]
    if (map.has(cur - k)) {
      res += map.get(cur - k)
    }
    if (!map.has(cur)) {
      map.set(cur, 1)
    } else {
      map.set(cur, map.get(cur) + 1)
    }
  }
  return res
}
