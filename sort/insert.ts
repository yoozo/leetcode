// 插入排序
function insertSort(arr: number[]) {
    const swap = (arr: number[], x: number, y: number) => {
        const swapNum = arr[y]
        arr[y] = arr[x]
        arr[x] = swapNum
    }

    let lastIndex = 1
    while (lastIndex < arr.length) {
        for (let i = lastIndex; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1)
            }
        }

        lastIndex++
    }
    return arr
}


console.log(insertSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))