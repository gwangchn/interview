/**
 * https://leetcode.cn/problems/check-permutation-lcci/description/?favorite=xb9lfcwi
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false

  const arr = new Array(128).fill(0)
  for (let i = 0; i < s1.length; i++) {
    arr[s1.codePointAt(i)]++
  }
  for (let i = 0; i < s2.length; i++) {
    arr[s2.codePointAt(i)]--
    if (arr[s2.codePointAt(i)] < 0) return false
  }

  return true
}
