/**
 * https://leetcode.cn/problems/find-peak-element/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length
  let left = 0,
    right = n - 1,
    ans = -1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
      ans = mid
      break
    }
    if (compare(nums, mid, mid + 1) < 0) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ans
}

// 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
// 方便处理 nums[-1] 以及 nums[n] 的边界情况
const get = (nums, idx) => (idx === -1 || idx === nums.length ? -Infinity : nums[idx])

const compare = (nums, idx1, idx2) => {
  const num1 = get(nums, idx1)
  const num2 = get(nums, idx2)

  return num1 > num2 ? 1 : -1
}
