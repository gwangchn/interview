/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */
let preorderTraversal = function(root) {
  const stack = [root]
  const res = []

  while (stack.length) {
    const item = stack.shift()
    if (!item) continue
    res.push(item.val)
    item.right && stack.unshift(item.right)
    item.left && stack.unshift(item.left)
  }
  return res
};
