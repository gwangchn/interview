/**
 * https://leetcode.cn/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let cur = map[s[i]]
    let next = map[s[i + 1]]
    if (cur < next) {
      res -= cur
    } else {
      res += cur
    }
  }
  return res
}
