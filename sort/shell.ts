// 希尔排序
function shellSort(arr: number[]) {
    const swap = (arr: number[], x: number, y: number) => {
        const swapNum = arr[y]
        arr[y] = arr[x]
        arr[x] = swapNum
    }

    // 增量（排序步长）
    let incr = Math.floor(arr.length / 2)

    // 增量循环
    while (incr) {
        // 每组需要排序的数组
        for (let startIndex = 0; startIndex < incr; startIndex++) {
            // 内部使用冒泡排序
            let lastIndex = Math.floor(arr.length / incr) * incr + startIndex
            while (lastIndex > 1) {
                for (let i = 0; i <= lastIndex; i = incr + i) {
                    if (arr[i] > arr[i + incr]) {
                        swap(arr, i, i + incr)
                    }
                }
                lastIndex = lastIndex - incr
            }
        }

        incr = Math.floor(incr / 2)
    }

    return arr
}


console.log(shellSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))
