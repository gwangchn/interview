/**
 * https://leetcode-cn.com/problems/assign-cookies/
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let res = 0
  let i = 0
  let j = 0

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      res++
      i++
    }
    j++
  }

  return res
};
