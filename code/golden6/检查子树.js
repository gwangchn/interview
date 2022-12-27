/**
 * https://leetcode.cn/problems/check-subtree-lcci/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
  const check = (t1, t2) => {
    if (!t1 || !t2) return t1 === t2
    return t1.val === t2.val && check(t1.left, t2.left) && check(t1.right, t2.right)
  }
  if (!t1 || !t2) return t1 === t2
  return check(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2)
}
