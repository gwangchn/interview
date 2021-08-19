//https://leetcode-cn.com/problems/find-the-difference/

/**
 * map
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function(s, t) {
  let mapS = createCharsMap(s)
  let mapT = createCharsMap(t)

  let targetMap = s.length > t.length ? mapS : mapT
  let otherMap = targetMap === mapS ? mapT : mapS
  let keys = Object.keys(targetMap)
  for (let key of keys) {
    if (targetMap[key] !== otherMap[key]) {
      return key
    }
  }
}

function createCharsMap(s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char]++
    }
  }
  return map
}

/**
 * 位运算
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 let findTheDifference = function (s, t) {
  let rest = t.charCodeAt(t.length - 1)
  for (let i = 0; i < s.length; i++) {
    let charS = s[i]
    let charT = t[i]
    rest ^= charS.charCodeAt(0)
    rest ^= charT.charCodeAt(0)
  }
  return String.fromCharCode(rest)
}
