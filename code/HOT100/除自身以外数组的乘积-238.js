/**
 * https://leetcode.cn/problems/product-of-array-except-self/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const answer = nums.map(() => 1)
  let prefix = 1
  let suffix = 1

  for (let i = 0; i < n; i++) {
    answer[i] *= prefix
    answer[n - i - 1] *= suffix
    prefix *= nums[i]
    suffix *= nums[n - i - 1]
  }

  return answer
}
