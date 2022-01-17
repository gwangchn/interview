/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
let isBalanced = function(root) {
  if (!root) {
    return true
  }

  let isSonBalnaced = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1

  return isSonBalnaced && isBalanced(root.left) && isBalanced(root.right)
};

function getHeight(node) {
  if (!node) return 0
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
