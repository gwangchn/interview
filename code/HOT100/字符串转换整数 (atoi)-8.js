/**
 * https://leetcode.cn/problems/string-to-integer-atoi/
 *
 * @param {string} s
 * @return {number}
 */
let myAtoi = function (s) {
  let res = 0
  // 正负号，默认正号
  let negativeSymbol = 1
  // 把首尾的空格都去掉
  s = s.trim()
  for (let i = 0; i < s.length; i++) {
    // 负数
    if (i == 0 && s[i] == '-') {
      negativeSymbol = -1
      continue
      // 正数
    } else if (i == 0 && s[i] == '+') continue
    // 因为空格会被转成0，所以要排除空格的情况，也就是说在数字范围内就加上
    if (s[i] >= 0 && s[i] <= 9 && s[i] != ' ') {
      res = res * 10 + (s[i] - 0)
      // 为什么在这里就判断呢，因为这里如果就溢出的话，就直接跳出，不需要再后面无意义的计算了
      if (res * negativeSymbol <= -2147483648) return -2147483648
      else if (res * negativeSymbol >= 2147483647) return 2147483647
    } else break
  }
  return res * negativeSymbol
}
