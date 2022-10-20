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

// function greatestCommonDivisor(m, n) {
//     var divisor = 0
//     for (let i = 1; i <= m || i <= n ; i++) {
//         if (m % i == 0 && n % i == 0) {
//             divisor = i
//         }
//     }
//     return divisor
// }

// function removeDuplicateMembersFromArray(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if ( ! (arr[i] in newArray)) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }

// function mergeTwoSortedArray(arr1, arr2) {
//     const newSortedArray = [] 
//     for(let i = 0; i < arr1.length; i++) {
//         newSortedArray.push(arr1[i])
//     }
//     for(let i = 0; i < arr2.length; i++) {
//         newSortedArray.push(arr2[i])
//     }
//     return newSortedArray.sort()
// }

// function swapNumb(a, b){
//     // console.log("a: " + a + " and b: " + b);
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;

//     // OR

//     // b = b - a
//     // a = a + b
//     // b = a - b

//     console.log("a: " + a + " and b: " + b);
//   }

function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("hello world hello Nigeria"))