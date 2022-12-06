/**
 * https://leetcode.cn/problems/check-balance-lcci/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0
    let leftHeight = dfs(node.left)
    let rightHeight = dfs(node.right)

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    } else {
      return Math.max(leftHeight, rightHeight) + 1
    }
  }

  return dfs(root) >= 0
}
