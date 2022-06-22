/**
 * https://leetcode.cn/problems/number-of-islands/
 *
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
  let res = 0
  let m = grid.length
  let n = grid[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (grid[i][j] === '1') {
        ++res
        dfs(grid, i, j)
      }
    }
  }

  function dfs(grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    )
      return
    grid[i][j] = '0'
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }

  return res
}
