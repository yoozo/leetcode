// 28. 实现 strStr(). 
// https://leetcode-cn.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle || needle.length === 0) {
        return 0
    }
    if (haystack.length < 1 || needle.length < 1 || needle.length > haystack.length) {
        return -1
    }
    const firstChar = needle[0]

    for (let index = 0; index < haystack.length; index++) {
        if (firstChar === haystack[index]) {
            let startIndex = index
            for (let flag = 0; flag < needle.length; flag++) {
                if (needle[flag] !== haystack[index + flag]) {
                    // console.log(needle[flag], haystack[index + flag])
                    startIndex = -1
                    break
                }
            }
            if (startIndex >= 0) {
                return startIndex
            }
        }
    }
    return -1
};

console.log(strStr('aaaaa', 'bba'))
