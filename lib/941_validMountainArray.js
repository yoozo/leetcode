// 941. 有效的山脉数组
// https://leetcode-cn.com/problems/valid-mountain-array/

var validMountainArray = function (A) {
    const len = A.length
    if (len >= 3) {
        let lock = false
        for (let i = 0; i < len - 1; i++) {
            // 等值异常
            if (A[i + 1] === A[i]) {
                return false
            }
            // 首次判断 必须是递增
            if (i === 0) {
                if (A[i] > A[i + 1]) {
                    return false
                } else {
                    continue
                }
            }

            if (!lock) {
                // 递增判断
                if (A[i] > A[i + 1]) {
                    // 首次出现反转,改变判断逻辑
                    lock = true
                }
            } else {
                // 递减判断
                if (A[i] > A[i + 1]) {
                    continue
                } else {
                    return false
                }
            }
        }
        if (lock) {
            return true
        }
    }
    return false
};

console.log(validMountainArray([1, 3, 2]))