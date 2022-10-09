/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length
  let total = (n * (n + 1)) / 2
  return total - nums.reduce((pre, cur) => pre + cur)
}
