// 283. 移动零. 
// https://leetcode-cn.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length > 1) {
        for (let end = nums.length; end > 0; end--) {
            for (let i = 0; i < end - 1; i++) {
                if (nums[i] === 0) {
                    // 交换位置
                    const c = nums[i + 1]
                    nums[i + 1] = nums[i]
                    nums[i] = c
                }
            }
        }

    }
    return nums
};


console.log(moveZeroes([0, 1, 0, 3, 12]))