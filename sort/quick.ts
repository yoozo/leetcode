// 快速排序
function quickSort(arr: number[], firstIndex?: number, lastIndex?: number) {
    if (firstIndex === undefined) {
        firstIndex = 0
    }
    if (lastIndex === undefined) {
        lastIndex = arr.length - 1
    }
    // 判断推出循环
    if (lastIndex <= firstIndex) {
        return
    }


    let pivotIndex = firstIndex;
    for (let i = firstIndex + 1; i <= lastIndex; i++) {

        if (arr[i] <= arr[pivotIndex]) {
            // 左移动
            const targetValue = arr[i]

            arr[i] = arr[pivotIndex + 1]
            arr[pivotIndex + 1] = arr[pivotIndex]
            arr[pivotIndex] = targetValue

            pivotIndex++
        } 
    }

    // 左边快排
    quickSort(arr, firstIndex, pivotIndex - 1)
    // 右边快排
    quickSort(arr, pivotIndex + 1, lastIndex)

    return arr
}


console.log(quickSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))
console.log(quickSort([4, 3, 2, 5, 1]))