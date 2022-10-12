/**
 * https://leetcode.cn/problems/power-of-three/description/?orderBy=most_votes&languageTags=javascript
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return /^10{0,}$/.test(n.toString(3))
}
