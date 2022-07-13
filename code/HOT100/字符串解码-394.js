/**
 * https://leetcode.cn/problems/decode-string/
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = []
  let strStack = []
  let str = ''
  let num = 0

  for (let item of s) {
    if (!isNaN(item)) {
      num = num * 10 + parseInt(item)
    } else if (item === '[') {
      numStack.push(num)
      strStack.push(str)
      num = 0
      str = ''
    } else if (item === ']') {
      str = strStack.pop() + str.repeat(numStack.pop())
    } else {
      str += item
    }
  }

  return str
}
