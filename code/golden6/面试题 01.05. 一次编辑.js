/**
 * https://leetcode.cn/problems/one-away-lcci/description/
 *
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  const m = first.length
  const n = second.length
  if (n - m === 1) {
    return oneInsert(first, second)
  } else if (m - n === 1) {
    return oneInsert(second, first)
  } else if (m === n) {
    let foundDifference = false
    for (let i = 0; i < m; i++) {
      if (first[i] != second[i]) {
        if (!foundDifference) {
          foundDifference = true
        } else {
          return false
        }
      }
    }
    return true
  } else {
    return false
  }
}

const oneInsert = (shorter, longer) => {
  for (let i = 0, j = 0; i < longer.length; ) {
    if (longer[i] === shorter[j]) j++
    i++
    if (i - j > 1) return false
  }
  return true
}
