// 希尔排序
function shellSort(arr: number[]) {
    const swap = (arr: number[], x: number, y: number) => {
        const swapNum = arr[y]
        arr[y] = arr[x]
        arr[x] = swapNum
    }

    // 增量循环
    for (let incr = Math.floor(arr.length / 2); incr; incr = Math.floor(incr / 2)) {
        // 每组需要排序的数组
        for (let lastIndex = incr; lastIndex < arr.length; lastIndex++) {
            for (let i = lastIndex; i > 0; i = i - incr) {
                if (arr[i] < arr[i - incr]) {
                    swap(arr, i, i - incr)
                } else {
                    break
                }
            }
        }

    }
    return arr
}


console.log(shellSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))
