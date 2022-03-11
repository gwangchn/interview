/**
 * https://leetcode-cn.com/problems/permutations/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let res = []
  handler([], [])

  function handler(visited, arr) {
    if (arr.length === nums.length) {
      res.push(arr.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true
        arr.push(nums[i])
        handler(visited, arr)
        arr.pop()
        visited[i] = false
      }
    }

  }
  return res
};
