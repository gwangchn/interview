// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  const l = s.length
  const map = {}
  let right = -1
  let res = 0

  for (let i = 0; i < l; i++) {
    if (i !== 0) map[s[i - 1]] = 0

    while(right + 1 < l && !map[s[right + 1]]) {
      map[s[right + 1]] = 1
      ++right
    }

    res = Math.max(res, right - i + 1)
  }

  return res
};
