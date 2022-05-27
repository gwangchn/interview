/**
 * https://leetcode.cn/problems/sort-colors/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  if (nums.length <= 1) return nums
  let p0 = 0
  let curr = 0
  let p2 = nums.length - 1
  while (curr <= p2) {
    if (nums[curr] == 0) {
      ;[nums[curr], nums[p0]] = [nums[p0], nums[curr]]
      curr++
      p0++
    } else if (nums[curr] == 2) {
      ;[nums[curr], nums[p2]] = [nums[p2], nums[curr]]
      p2--
    } else {
      //curr == 1 的情况
      curr++
    }
  }
  return nums
}
