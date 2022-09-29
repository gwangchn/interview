/**
 * https://leetcode.cn/problems/basic-calculator-ii/
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim()
  const stack = []
  let preSign = '+'
  let num = 0
  const n = s.length

  for (let i = 0; i < n; i++) {
    if (isFinite(s[i]) && s[i] !== ' ') num = num * 10 + Number(s[i])
    if (isNaN(s[i]) || i === n - 1) {
      const map = {
        '+'() {
          stack.push(num)
        },
        '-'() {
          stack.push(-num)
        },
        '*'() {
          stack.push(stack.pop() * num)
        },
        '/'() {
          stack.push((stack.pop() / num) | 0)
        }
      }
      map[preSign]()
      preSign = s[i]
      num = 0
    }
  }

  return stack.reduce((pre, cur) => pre + cur)
}
