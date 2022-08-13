// 选择排序
function selectSort(arr: number[]) {
    let firstIndex = 0
    const swap = (arr: number[], x: number, y: number) => {
        const swapNum = arr[y]
        arr[y] = arr[x]
        arr[x] = swapNum
    }

    while (firstIndex < arr.length - 2) {
        let minIndex = firstIndex
        for (let i = firstIndex + 1; i < arr.length; i++) {
            if (arr[minIndex] > arr[i]) {
                minIndex = i
            }
        }
        swap(arr, minIndex, firstIndex)
        firstIndex++
    }

    return arr
}


console.log(selectSort([23, 54, 767, 454, 234, 1, 123, 5, 42, 6, 2, 3, 67, 4]))