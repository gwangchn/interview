/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 *
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let max = 0 // 当前最大回文串的长度
  let start = -1 // 当前最大回文串的起始索引
  const l = s.length // s 的长度
  for (let i = 0; i < l; i++) {
    // 遍历 s
    let now = 1 // 当前回文串的长度
    let l = i - 1 // 左侧开始遍历的指针
    while (s[i + 1] === s[i]) {
      // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
      now++
      i++
    }
    let r = i + 1 // 获取右侧开始遍历的指针
    while (s[l] === s[r] && s[l] !== undefined) {
      // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接累积到当前长度中,修改左右指针
      now += 2
      l--
      r++
    }
    if (now > max) {
      // 判断与之前最大的对比,更新当前最大回文串的起始索引
      max = now
      start = l + 1
    }
  }
  return s.substring(start, start + max)
}
