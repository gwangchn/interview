/**
 * https://leetcode-cn.com/problems/palindrome-partitioning/
 *
 * @param {string} s
 * @return {string[][]}
 */
let partition = function (s) {
  let res = []

  dfs(0, [])

  function isPalindrome(s, l, r) {
    for (; l < r; l++, r--) {
      if (s[l] !== s[r]) return false
    }
    return true
  }

  function dfs(j, path) {
    if (j === s.length) res.push([...path])
    for (let i = j; i < s.length; i++) {
      if (isPalindrome(s, j, i) === false) continue
      path.push(s.substr(j, i - j + 1))
      dfs(i + 1, path)
      path.pop()
    }
  }

  return res
}
