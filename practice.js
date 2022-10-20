// function verifyPrimeNumber(number) {
//     for (let divisor = 2; divisor < number; divisor++) {
//         if (number % divisor == 0) {
//             return false
//         }
//     }
//     return true
// }

function findPrimeFactors(number) {
    var primeFactors = []
    for (let i = 2; number > 2; i++) {
        if (number % i == 0) {
            primeFactors.push(i)
            number = number / i
        }
    }
    return primeFactors
}

console.log(findPrimeFactors(20))