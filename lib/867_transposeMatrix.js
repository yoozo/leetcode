// 867. 转置矩阵
// https://leetcode-cn.com/problems/transpose-matrix/
// start: 20:57  end: 21:14   use: 17min


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 方法1： 空间换时间 新建一组二位数组
var transpose = function (A) {
    let B = []
    for (let col in A) {
        // Bi 是B数组的索引
        for (let Bi in A[col]) {
            const item = A[col][Bi]
            if (!B[Bi]) {
                B[Bi] = []
            }
            B[Bi][col] = item
        }
    }

    return B
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))