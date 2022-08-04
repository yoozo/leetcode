// 3. 无重复字符的最长子串. 
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const wordSet = new Set()
    const maxLen = s.length
    let retLen = 0
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < maxLen) {
        // 发现重复，丢弃最左节点，窗口向右滑动
        while (!wordSet.has(s.charAt(rightIndex))) {
            wordSet.add(s.charAt(rightIndex))
            rightIndex++
            if(rightIndex === maxLen){
                break
            }
        }

        // 下次循环预设值
        if (wordSet.size > retLen) {
            retLen = wordSet.size
        }
        // 判断剩下长度和最大长度，是否可以提前结束
        if (maxLen - leftIndex < retLen) {
            break
        }
        wordSet.clear()
        leftIndex = rightIndex = leftIndex + 1
    }
    return retLen
};


console.log(lengthOfLongestSubstring("tmmzuxt"))