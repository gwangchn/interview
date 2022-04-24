/**
 * https://leetcode-cn.com/problems/combination-sum-iii/
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function (k, n) {
  let res = []
  let dfs = (num, arr, sum) => {
    if (arr.length === k) {
      if (sum === n) res.push([...arr])
      return
    }

    for (let i = num; i <= 10 + arr.length - k; i++) {
      arr.push(i)
      dfs(i + 1, arr, sum + i)
      arr.pop()
    }
  }

  dfs(1, [], 0)

  return res
}
