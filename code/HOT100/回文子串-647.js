/**
 * https://leetcode.cn/problems/palindromic-substrings/
 *
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length
  let res = 0

  for (let i = 0; i < 2 * n - 1; i++) {
    let l = i / 2
    let r = l + (i % 2)

    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
      --l
      ++r
      ++res
    }
  }

  return res
}
