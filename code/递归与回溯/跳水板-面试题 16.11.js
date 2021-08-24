// https://leetcode-cn.com/problems/diving-board-lcci/

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (k === 0) return []
  if (shorter === longer) return [shorter * k]

  const res = []
  for (let i = 0; i <= k; i++) {
    res.push(longer * i + shorter * (k - i))
  }
  return res
};
