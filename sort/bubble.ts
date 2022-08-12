// 冒泡排序
function bubbleSort(arr: number[]) {
    let lastIndex = arr.length
    const swap = (arr: number[], x: number, y: number) => {
        const swapNum = arr[y]
        arr[y] = arr[x]
        arr[x] = swapNum
    }

    while (lastIndex > 1) {
        for (let i = 0; i <= lastIndex; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
        lastIndex--
    }
    return arr
}


console.log(bubbleSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))