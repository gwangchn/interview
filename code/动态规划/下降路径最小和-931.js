/**
 * https://leetcode-cn.com/problems/minimum-falling-path-sum/
 *
 * @param {number[][]} matrix
 * @return {number}
 */
let minFallingPathSum = function (matrix) {
  let n = matrix.length
  if (n === 1) return matrix[0][0]

  let res = Infinity
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let left = matrix[i - 1][j - 1]
      let mid = matrix[i - 1][j]
      let right = matrix[i - 1][j + 1]
      if (j === 0) left = Infinity
      if (j === n - 1) right = Infinity
      matrix[i][j] += Math.min(left, mid, right)
      if (i === n - 1) res = Math.min(res, matrix[i][j])
    }
  }

  return res
}
