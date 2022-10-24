/**
 * https://leetcode.cn/problems/first-unique-character-in-a-string/description/
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let newArr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i) - 'a'.charCodeAt()
    newArr[num]++
  }
  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i) - 'a'.charCodeAt()
    if (newArr[num] == 1) return i
  }

  return -1
}
