function factorial(n) {
    if (typeof n !== "number" || n < 0) return console.log("Invalid input");
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-3)); // Invalid input
console.log(factorial("abc")); // Invalid input
