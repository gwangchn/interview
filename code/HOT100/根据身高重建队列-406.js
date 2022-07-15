/**
 * https://leetcode.cn/problems/queue-reconstruction-by-height/
 *
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = []

  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i])
  }

  return res
}
