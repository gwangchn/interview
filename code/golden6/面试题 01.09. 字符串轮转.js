/**
 * https://leetcode.cn/problems/string-rotation-lcci/description/?favorite=xb9lfcwi
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1
}
