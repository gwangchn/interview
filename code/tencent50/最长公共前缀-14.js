/**
 * https://leetcode.cn/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let end = 0
  while (strs.every(item => end < item.length && item[end] === strs[0][end])) end++
  return strs[0].slice(0, end)
}
