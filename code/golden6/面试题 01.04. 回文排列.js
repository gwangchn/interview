/**
 * https://leetcode.cn/problems/palindrome-permutation-lcci/description/?favorite=xb9lfcwi&languageTags=javascript
 *
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Map()
  for (let str of s) {
    if (map.has(str)) {
      map.delete(str)
    } else {
      map.set(str)
    }
  }
  return map.size === 1 || map.size === 0
}
