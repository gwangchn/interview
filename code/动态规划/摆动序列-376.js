/**
 * @param {number[]} nums
 * @return {number}
 */
let wiggleMaxLength = function(nums) {
  const n = nums.length
  if (n < 2) return n

  let up = 1
  let down = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1)
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down)
    }
  }

  return Math.max(up, down)
}
