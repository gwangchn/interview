/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let n = nums.length
  if (n === 3) {
    return nums[0] + nums[1] + nums[2]
  }
  // 先升序排序 此为解题的前置条件
  nums.sort((a, b) => a - b)

  let min = Infinity // 和 target 的最小差
  let res

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1
    let right = n - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      let gup = sum - target
      let val = Math.abs(gup)
      if (val < min) {
        min = val
        res = sum
      }

      if (gup > 0) {
        --right
      }
      if (gup < 0) {
        ++left
      }
      if (gup === 0) {
        return sum
      }
    }
  }

  return res
};
