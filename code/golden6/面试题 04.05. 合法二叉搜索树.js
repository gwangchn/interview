/**
 * https://leetcode.cn/problems/legal-binary-search-tree-lcci/description/
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
var isValidBST = function (root) {
  const dfs = (node, min, max) => {
    if (!node) return true
    const { left, right, val } = node
    if (val <= min || val >= max) return false
    return dfs(left, min, val) && dfs(right, val, max)
  }

  return dfs(root, -Infinity, Infinity)
}
