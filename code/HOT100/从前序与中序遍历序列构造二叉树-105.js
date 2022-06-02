/**
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function (preorder, inorder) {
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  const helper = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null

    let rootVal = preorder[pStart]
    let root = new TreeNode(rootVal)
    let mid = map.get(root.val)
    let leftNum = mid - iStart
    root.left = helper(pStart + 1, pStart + leftNum, iStart, mid)
    root.right = helper(pStart + leftNum + 1, pEnd, mid + 1, iEnd)
    return root
  }
  return helper(0, preorder.length - 1, 0, inorder.length - 1)
}
