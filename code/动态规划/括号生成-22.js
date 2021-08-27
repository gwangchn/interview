// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const dp = [[''], ['()']]

  for (let i = 2; i <= n; i++) {
    let j = i - 1
    const res = []

    while (j >= 0) {
      for (const k of dp[j]) {
        for (const l of dp[i - 1 - j]) {
          res.push(`(${k})${l}`)
        }
      }
      --j
    }

    dp[i] = res
  }

  return dp[n]
};
