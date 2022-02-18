/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let rightSideView = function(root) {
  if (!root) return []

  let stack = [root]
  let res = []

  while (stack.length) {
    res.push(stack[stack.length - 1].val)
    let arr = []
    for (var i = 0; i < stack.length; i++) {
      let node = stack[i]
      let left = node.left
      let right = node.right
      left && arr.push(left)
      right && arr.push(right)
    }
    stack = arr
  }

  return res
};
