/**
 * https://leetcode-cn.com/problems/binary-search/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = l + r >> 1
    let midVal = nums[mid]
    if (midVal === target) return mid
    if (midVal > target) {
      r = mid - 1
    }
    if (midVal < target) {
      l = mid + 1
    }
  }

  return -1
};
