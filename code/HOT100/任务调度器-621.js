/**
 * https://leetcode.cn/problems/task-scheduler/
 *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const countArr = Object.values(_.countBy(tasks))
  const maxExec = Math.max(...countArr)
  let maxCount = 0

  for (const item of countArr) {
    if (item === maxExec) ++maxCount
  }

  return Math.max(tasks.length, (maxExec - 1) * (n + 1) + maxCount)
}
