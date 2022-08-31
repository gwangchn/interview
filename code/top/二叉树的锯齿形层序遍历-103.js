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
var zigzagLevelOrder = function (root) {
  if (!root) return []

  const ans = []
  const nodeQueue = [root]

  let isOrderLeft = true

  while (nodeQueue.length) {
    let levelList = []
    const size = nodeQueue.length
    for (let i = 0; i < size; ++i) {
      const { left, right, val } = nodeQueue.shift()
      if (isOrderLeft) {
        levelList.push(val)
      } else {
        levelList.unshift(val)
      }
      left && nodeQueue.push(left)
      right && nodeQueue.push(right)
    }
    ans.push(levelList)
    isOrderLeft = !isOrderLeft
  }

  return ans
}
