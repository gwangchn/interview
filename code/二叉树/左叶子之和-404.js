/**
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
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
 * @return {number}
 */
let sumOfLeftLeaves = function(root) {
  let res = 0

  handler(root, false)

  function handler(node, isLeft) {
    if (!node.left && !node.right && isLeft) {
      res += node.val
      return
    }
    node.left && handler(node.left, true)
    node.right && handler(node.right, false)
  }

  return res
};
