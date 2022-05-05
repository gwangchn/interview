/**
 * https://leetcode-cn.com/problems/path-with-maximum-gold/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
let getMaximumGold = function (grid) {
  let resGoldNum = 0
  let xMax = grid[0].length
  let yMax = grid.length
  let i
  let j
  let tempGoldNum

  function findNext(x, y, recentGoldNum) {
    let tmpRecentVal

    recentGoldNum += grid[y][x]
    tmpRecentVal = grid[y][x]
    grid[y][x] = 0

    if (x > 0 && grid[y][x - 1] != 0) {
      /* have a way to left */
      findNext(x - 1, y, recentGoldNum)
    }

    if (x < xMax - 1 && grid[y][x + 1] != 0) {
      /* have a way to right */
      findNext(x + 1, y, recentGoldNum)
    }

    if (y > 0 && grid[y - 1][x] != 0) {
      /* have a way to up */
      findNext(x, y - 1, recentGoldNum)
    }

    if (y < yMax - 1 && grid[y + 1][x] != 0) {
      /* have a way to down */
      findNext(x, y + 1, recentGoldNum)
    }

    /* if no way out, it's the end of current path */
    resGoldNum = recentGoldNum > resGoldNum ? recentGoldNum : resGoldNum

    grid[y][x] = tmpRecentVal
  }

  for (i = 0; i < yMax; i++) {
    for (j = 0; j < xMax; j++) {
      if (grid[i][j] != 0) {
        tempGoldNum = 0
        findNext(j, i, tempGoldNum)
      }
    }
  }

  return resGoldNum
}
