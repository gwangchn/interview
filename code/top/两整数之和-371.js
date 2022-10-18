/**
 * https://leetcode.cn/problems/sum-of-two-integers/description/?favorite=2ckc81c
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    const carry = (a & b) << 1
    a = a ^ b
    b = carry
  }

  return a
}
