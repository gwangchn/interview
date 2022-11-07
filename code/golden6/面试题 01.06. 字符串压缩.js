/**
 * https://leetcode.cn/problems/compress-string-lcci/description/
 *
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let pre = S[0]
  let count = 0
  let res = ''

  for (let item of S) {
    if (item === pre) {
      count++
    } else {
      res += pre + count
      pre = item
      count = 1
    }
  }
  res += pre + count

  return res.length < S.length ? res : S
}
