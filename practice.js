// function verifyPrimeNumber(number) {
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             return false
//         }
//     }
//     return true
// }

// function nthFibonacciNumber(n) {
//     var fibo = [1, 1]

//     if (n <= 2) return 1
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2]
//     }
//     return fibo[n]
// }

function greatestCommonDivisor(m, n) {
    var divisor = 0
    for (let i = 1; i <= m || i <= n ; i++) {
        if (m % i == 0 && n % i == 0) {
            divisor = i
        }
    }
    return divisor
}

console.log(greatestCommonDivisor(69, 169))