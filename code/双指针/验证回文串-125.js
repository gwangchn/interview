/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 
 * @param {string} s
 * @return {boolean}
 */
 let isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let i = 0
    let j = s.length - 1

    while(i < j) {
        let head = s[i]
        let tail = s[j]

        if (head !== tail) {
            return false
        }else {
            i++
            j--
        }
    }
    return true
};