/**
 * https://leetcode-cn.com/problems/subsets/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function(nums) {
  let res = []
  let arr = []
  let handler = num => {
    res.push(arr.slice())
    for (let i = num; i < nums.length; i++) {
      arr.push(nums[i])
      handler(i + 1)
      arr.pop()
    }
  }

  handler(0)

  return res
};
