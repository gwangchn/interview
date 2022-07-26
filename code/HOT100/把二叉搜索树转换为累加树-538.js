/**
 * https://leetcode.cn/problems/convert-bst-to-greater-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  let node = root

  while (node) {
    if (node.right) {
      let succ = node.right
      while (succ.left && succ.left !== node) {
        succ = succ.left
      }
      if (succ.left) {
        succ.left = null
        sum += node.val
        node.val = sum
        node = node.left
      } else {
        succ.left = node
        node = node.right
      }
    } else {
      sum += node.val
      node.val = sum
      node = node.left
    }
  }

  return root
}
