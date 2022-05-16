/**
 * https://leetcode.cn/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let res = 0
  let l = 0
  let r = height.length - 1

  while (l < r) {
    let min
    if (height[r] > height[l]) {
      min = height[l]
      res = Math.max(res, min * (r - l))
      l++
    } else {
      min = height[r]
      res = Math.max(res, min * (r - l))
      r--
    }
  }

  return res
}
