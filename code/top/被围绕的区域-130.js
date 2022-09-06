/**
 * https://leetcode.cn/problems/surrounded-regions/
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const n = board.length
  const m = board[0].length
  const dfs = (board, i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== 'O') return
    board[i][j] = 'A'
    dfs(board, i - 1, j)
    dfs(board, i + 1, j)
    dfs(board, i, j - 1)
    dfs(board, i, j + 1)
  }

  for (let i = 0; i < n; i++) {
    dfs(board, i, 0)
    dfs(board, i, m - 1)
  }
  for (let i = 1; i < m - 1; i++) {
    dfs(board, 0, i)
    dfs(board, n - 1, i)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'A') board[i][j] = 'O'
      else if (board[i][j] === 'O') board[i][j] = 'X'
    }
  }

  return board
}
