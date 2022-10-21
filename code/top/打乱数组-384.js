/**
 * https://leetcode.cn/problems/shuffle-an-array/description/?favorite=2ckc81c
 * 
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.original = this.nums.slice()
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.original.slice()
  return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * (n - i)) + i
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
