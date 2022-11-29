// https://leetcode.cn/problems/sort-of-stacks-lcci/description/?favorite=xb9lfcwi&languageTags=javascript

var SortedStack = function () {
  this.stack = []
  this.help = []
}

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  while (!this.isEmpty() && this.peek() < val) {
    this.help.push(this.pop())
  }
  this.stack.push(val)
  while (this.help.length) {
    this.stack.push(this.help.pop())
  }
}

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  return this.isEmpty() ? -1 : this.stack.pop()
}

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  return this.isEmpty() ? -1 : this.stack[this.stack.length - 1]
}

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return !this.stack.length
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
