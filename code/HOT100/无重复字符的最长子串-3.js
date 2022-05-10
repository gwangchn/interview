/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let minIndex = 0
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], minIndex) < i) minIndex = s.indexOf(s[i], minIndex) + 1
    else maxLength = Math.max(i - minIndex + 1, maxLength)
  }
  return maxLength
}
