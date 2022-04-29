/**
 * https://leetcode-cn.com/problems/letter-case-permutation/
 *
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
  let res = []
  let n = s.length
  dfs(0, '')

  function dfs(i, str) {
    if (i === n) {
      res.push(str)
      return
    }

    if (isNaN(s[i])) {
      dfs(i + 1, str + s[i].toUpperCase())
      dfs(i + 1, str + s[i].toLowerCase())
    } else {
      dfs(i + 1, str + s[i])
    }
  }

  return res
}
