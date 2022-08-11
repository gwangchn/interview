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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const bst = new MyBst(root)
  return bst.kthSmallest(k)
}

class MyBst {
  constructor(root) {
    this.root = root
    this.nodeNum = new Map()
    this.countNodeNum(root)
  }

  // 返回二叉搜索树中第k小的元素
  kthSmallest(k) {
    let node = this.root
    while (node != null) {
      const left = this.getNodeNum(node.left)
      if (left < k - 1) {
        node = node.right
        k -= left + 1
      } else if (left === k - 1) {
        break
      } else {
        node = node.left
      }
    }
    return node.val
  }

  // 统计以node为根结点的子树的结点数
  countNodeNum(node) {
    if (node == null) {
      return 0
    }
    this.nodeNum.set(node, 1 + this.countNodeNum(node.left) + this.countNodeNum(node.right))
    return this.nodeNum.get(node)
  }

  // 获取以node为根结点的子树的结点数
  getNodeNum(node) {
    return this.nodeNum.get(node) || 0
  }
}
