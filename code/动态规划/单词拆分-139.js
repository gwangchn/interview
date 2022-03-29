/**
 * https://leetcode-cn.com/problems/word-break/
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let wordBreak = function(s, wordDict) {
  let n = s.length
  let set = new Set(wordDict)
  let dp = [true]

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[n] ? true : false
};
