// 290. 单词规律. 
// https://leetcode-cn.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const pMap = new Map()
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i]
        if (pMap.has(c)) {
            pMap.get(c).push(i)
        } else {
            pMap.set(c, [i])
        }
    }
    const sArray = s.split(' ')
    if (pattern.length !== sArray.length) {
        return false
    }
    const word = []
    for (const item of pMap) {
        if (!word.includes(sArray[item[1][0]])) {
            word.push(sArray[item[1][0]])
        } else {
            return false
        }
        for (let i = 1; i < item[1].length; i++) {
            if (sArray[item[1][0]] !== sArray[item[1][i]]) {
                return false
            }
        }
    }
    return true
};


console.log(wordPattern("abba", "dog dd dd dog"))