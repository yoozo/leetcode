// 两数之和
// https://leetcode-cn.com/problems/two-sum/

/**
 * 暴力枚举
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 2) {
        return []
    }
    for (let i = 0; i < nums.length - 1; i++) {
        const a = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            const b = nums[j]
            if (a + b === target) {
                return [i, j]
            }
        }
    }
    return []
};
