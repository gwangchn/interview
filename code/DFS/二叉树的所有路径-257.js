/**
 * https://leetcode-cn.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
let binaryTreePaths = function(root) {
  let res = []

  handler(root, '')

  function handler(node, path) {
    let curPath = path + '->' + node.val

    if (!node.left && !node.right) {
      res.push(curPath.slice(2))
      return
    }
    node.left && handler(node.left, curPath)
    node.right && handler(node.right, curPath)
  }

  return res
};
