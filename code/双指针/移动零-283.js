/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (nums[right] !== 0) {
      if (nums[left] === 0) {
        let val = nums[right]
        nums[right] = nums[left]
        nums[left] = val
      }
      left++
    }
    right++
  }

  return nums
};
