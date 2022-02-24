/**
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let maxSlidingWindow = function(nums, k) {
  let queue = []
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (queue[0] <= i - k) queue.shift()
    while (nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    if (i >= k - 1) res.push(nums[queue[0]])
  }
  return res
};
