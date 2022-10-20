// function verifyPrimeNumber(number) {
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             return false
//         }
//     }
//     return true
// }

function nthFibonacciNumber(n) {
    var fibo = [1, 1]

    if (n <= 2) return 1
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo[n]
}

console.log(nthFibonacciNumber(12))