/**
 * https://leetcode.cn/problems/hamming-distance/
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = 0
  let s = x ^ y

  while (s !== 0) {
    s &= s - 1
    n++
  }

  return n
}
