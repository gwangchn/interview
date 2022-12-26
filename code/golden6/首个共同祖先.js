/**
 * https://leetcode.cn/problems/first-common-ancestor-lcci/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans

  const dfs = (node, p, q) => {
    if (node === null) return false
    const lson = dfs(node.left, p, q)
    const rson = dfs(node.right, p, q)
    if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) ans = node
    return lson || rson || node.val === p.val || node.val === q.val
  }

  dfs(root, p, q)

  return ans
}
