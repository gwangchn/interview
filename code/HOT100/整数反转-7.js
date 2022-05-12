/**
 * https://leetcode.cn/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let ret = 0
  while (x) {
    ret = ret * 10 + (x % 10)
    if (ret > Math.pow(2, 31) - 1 || ret < Math.pow(-2, 31)) return 0
    x = (x / 10) | 0
  }
  return ret
}
