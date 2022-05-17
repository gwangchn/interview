/**
 * https://leetcode.cn/problems/3sum/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  let n = nums.length
  if (n < 3) return []
  nums.sort((a, b) => a - b)
  let res = []

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return res
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = n - 1

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l + 1]) l++
        while (nums[r] === nums[r - 1]) r--
        l++
        r--
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--
      } else {
        l++
      }
    }
  }

  return res
}
