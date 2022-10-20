function verifyPrimeNumber(number) {
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            return false
        }
    }
    return true
}

console.log(verifyPrimeNumber(11))