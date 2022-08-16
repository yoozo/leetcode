// 插入排序
function insertSort(arr: number[]) {
    for (let lastIndex = 1; lastIndex < arr.length; lastIndex++) {
        const lastValue = arr[lastIndex]
        let insertIndex = lastIndex
        for (let i = lastIndex - 1; i >= 0; i--) {
            if (lastValue < arr[i]) {
                // 向后移动一位
                arr[i + 1] = arr[i]
                insertIndex = i
            } else {
                // 插入
                break
            }
        }
        arr[insertIndex] = lastValue
    }

    return arr
}


console.log(insertSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))