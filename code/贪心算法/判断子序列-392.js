/**
 * https://leetcode-cn.com/problems/is-subsequence/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t) {
  let sl = s.length
  if (!sl) {
    return true
  }

  let i = 0
  for (let j = 0; j < t.length; j++) {
    let target = s[i]
    let cur = t[j]
    if (cur === target) {
      i++
      if (i === sl) {
        return true
      }
    }
  }

  return false
}
