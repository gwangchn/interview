/**
 * https://leetcode.cn/problems/is-unique-lcci/description/?favorite=xb9lfcwi&orderBy=most_votes
 *
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let mark = 0

  for (let i = 0; i < astr.length; i++) {
    const cur = 1 << (astr[i].charCodeAt() - 'a'.charCodeAt())
    if ((mark & cur) !== 0) return false
    else mark |= cur
  }

  return true
}
