/**
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const total = p.length
  const count = new Array('z'.charCodeAt() + 1).fill(0)
  for (let char of p) {
    count[char.charCodeAt()]++
  }
  const n = s.length
  const result = []
  let l = (r = c = 0)
  while (r < n) {
    c++
    count[s.charCodeAt(r)]--
    while (c > total || count[s.charCodeAt(r)] < 0) {
      c--
      count[s.charCodeAt(l)]++
      l++
    }
    if (c === total) result.push(l)
    r++
  }
  return result
}
