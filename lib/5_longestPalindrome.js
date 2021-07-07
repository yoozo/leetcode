// 5. 最长回文子串. 
// https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLength = s.length

    while (maxLength > 1) {
        const callTime =  s.length - maxLength
        for (let i = 0; i <= callTime; i++) {
            let left = i
            let right = maxLength - 1 + i

            let flag = true
            while (left < right) {
                if (s[right] !== s[left]) {
                    flag = false
                    break
                }

                left++
                right--
            }

            if (flag) {
                return s.substring(i, maxLength + i)
            }
        }
        maxLength--
    }

    return s[0]
};


// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('a'))
console.log(longestPalindrome('abb'))