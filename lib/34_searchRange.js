// 34. 在排序数组中查找元素的第一个和最后一个位置. 
// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = -1, end = -1

    for (let index = 0; index < nums.length; index++) {
        const item = nums[index]
        if (item === target) {
            start = start === -1 ? index : start
            end = index
        }
    }
    return [start, end]
};


console.log(searchRange([5, 7, 7, 8, 8, 10], 8))