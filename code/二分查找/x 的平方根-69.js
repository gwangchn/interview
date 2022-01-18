/**
 * https://leetcode-cn.com/problems/sqrtx/
 * 
 * @param {number} x
 * @return {number}
 */
 let mySqrt = function(x) {
    let left = 0
    let right = x
    let res = -1

    while (right >= left) {
        let mid = Math.round((left + right) / 2)
        
        if (mid * mid <= x) {
            res = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return res
};