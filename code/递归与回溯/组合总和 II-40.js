/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let res = []
  let handler = (i, sum, arr) => {
    if (sum === target) {
      res.push(arr)
      return
    }
    for (let j = i; j < candidates.length; j++) {
      if ((sum + candidates[j]) > target) break
      if (j > i && candidates[j] === candidates[j - 1]) continue
      handler(j + 1, sum + candidates[j], arr.concat([candidates[j]]))
    }
  }
  handler(0, 0, [])
  return res
};
