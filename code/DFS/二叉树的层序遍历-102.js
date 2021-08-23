// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []

  function handle(node, level) {
    if (!node) return
    if (!res[level]) res[level] = []
    res[level].push(node.val)
    
    ++level
    handle(node.left, level)
    handle(node.right, level)
  }

  handle(root, 0)

  return res
};
