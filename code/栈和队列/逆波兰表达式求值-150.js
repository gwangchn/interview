/**
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 * 
 * @param {string[]} tokens
 * @return {number}
 */
let opMap = {
  "+": (a, b) => b + a,
  "-": (a, b) => b - a,
  "*": (a, b) => b * a,
  "/": (a, b) => parseInt(b / a, 10),
}

let evalRPN = function(tokens) {
  let stack = []
  for (let token of tokens) {
    let op = opMap[token]
    if (op) {
      let a = parseInt(stack.pop())
      let b = parseInt(stack.pop())
      let res = op(a, b)
      stack.push(res)
    } else {
      stack.push(token)
    }
  }
  return stack[0]
}
