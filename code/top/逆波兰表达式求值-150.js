/**
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 *
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stack = []
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
      var num1 = stack.pop()
      var num2 = stack.pop()
      if (tokens[i] === '+') stack.push(num1 + num2)
      else if (tokens[i] === '-') stack.push(num2 - num1)
      else if (tokens[i] === '*') stack.push(num1 * num2)
      else if (tokens[i] === '/') stack.push(parseInt(num2 / num1))
    } else {
      stack.push(Number(tokens[i]))
    }
  }
  return stack.pop()
}
