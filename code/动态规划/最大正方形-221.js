/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalSquare = function(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const dp = Array.from(new Array(rows), () => new Array(cols).fill(0))
  let max = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max * max
};
