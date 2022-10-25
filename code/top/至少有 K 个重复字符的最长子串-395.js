/**
 * https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/description/?favorite=2ckc81c&languageTags=javascript
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let res = 0
  const start = 'a'.charCodeAt()
  const cnt = new Array(26)
  // 确定 [i,j] 区间内所含的p个字符种类
  for (let p = 1; p <= 26; ++p) {
    cnt.fill(0)
    let tot = 0,
      sum = 0
    for (let i = 0, j = 0; j < s.length; ++j) {
      const idx1 = s.charCodeAt(j) - start
      cnt[idx1]++
      if (cnt[idx1] === 1) tot++
      if (cnt[idx1] === k) sum++
      while (tot > p) {
        const idx2 = s.charCodeAt(i) - start
        cnt[idx2]--
        if (cnt[idx2] === 0) tot--
        if (cnt[idx2] === k - 1) sum--
        i++
      }
      if (tot === sum) {
        res = Math.max(res, j - i + 1)
      }
    }
  }
  return res
}
