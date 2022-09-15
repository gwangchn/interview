/**
 * https://leetcode.cn/problems/excel-sheet-column-number/
 *
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0

  for (let i = 0; i < columnTitle.length; i++) {
    res = res * 26 + columnTitle[i].charCodeAt() - 64
  }

  return res
}
