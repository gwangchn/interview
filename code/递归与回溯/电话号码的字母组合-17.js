// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
let letterMap = [
  " ", //0
  "", //1
  "abc", //2
  "def", //3
  "ghi", //4
  "jkl", //5
  "mno", //6
  "pqrs", //7
  "tuv", //8
  "wxyz" //9
]
var letterCombinations = function(digits) {
  let res = []

  if (digits === "") {
    return res
  }

  let findCombinations = (index, str) => {
    if (digits.length === index) {
      res.push(str)
      return
    }

    let char = digits[index]
    let letters = letterMap[Number(char)]

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      findCombinations(index + 1, `${str}${letter}`)
    }
  }

  findCombinations(0, "")

  return res
};
