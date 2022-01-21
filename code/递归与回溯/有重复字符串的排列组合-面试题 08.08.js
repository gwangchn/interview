/**
 * https://leetcode-cn.com/problems/permutation-ii-lcci/
 * 
 * @param {string} S
 * @return {string[]}
 */
let permutation = function(S) {
  let res = []
  let helper = (prev, rest) => {
    if (prev.length === S.length) {
      res.push(prev)
      return
    }

    let visited = {}
    for (let i = 0; i < rest.length; i++) {
      let char = rest[i]
      if (visited[char]) {
        continue
      }
      visited[char] = true
      helper(prev + char, rest.substring(0, i) + rest.substring(i + 1))
    }
  }
  helper('', S)
  return res
};
