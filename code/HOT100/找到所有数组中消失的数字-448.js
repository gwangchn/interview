/**
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    nums[(nums[i] - 1) % n] += n
  }

  const res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) res.push(i + 1)
  }

  return res
}
