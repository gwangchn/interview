/**
 * https://leetcode.cn/problems/course-schedule/
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = [],
    indeg = [],
    studied = 0

  for (let i = 0; i < numCourses; i++) {
    map.push([])
    indeg.push(0)
  }

  for (let i = 0; i < prerequisites.length; i++) {
    let [course, prere] = prerequisites[i]

    map[prere].push(course)
    indeg[course]++
  }

  let queue = []
  for (let j = 0; j < indeg.length; j++) {
    if (indeg[j] == 0) {
      queue.push(j)
    }
  }

  while (queue.length) {
    let k = queue.shift()
    studied++
    let prearr = map[k]
    for (let d = 0; d < prearr.length; d++) {
      indeg[prearr[d]]--
      if (indeg[prearr[d]] == 0) {
        queue.push(prearr[d])
      }
    }
  }

  return studied == numCourses
}
