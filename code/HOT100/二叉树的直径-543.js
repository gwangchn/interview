/**
 * https://leetcode.cn/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function (root) {
  let max = 0

  const dfs = node => {
    if (!node) return 0
    let L = dfs(node.left)
    let R = dfs(node.right)
    max = Math.max(L + R, max)
    return Math.max(L, R) + 1
  }

  dfs(root)

  return max
}
