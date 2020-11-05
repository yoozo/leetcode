// 剑指 Offer 10- I. 斐波那契数列. 
// https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
// start  21:45    end  

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let res = [0, 1]

    function f(n) {
        if (typeof res[n] !== 'undefined') {
            return res[n]
        }
        // console.log(`res[${n}] = f(${n - 1}) + f(${n - 2})`)
        res[n] = (f(n - 1) + f(n - 2)) % 1000000007
        // console.log(res)
        return res[n]
    }
    return f(n)
};

console.log(fib(81))