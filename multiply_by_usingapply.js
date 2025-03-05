function multiply(a, b) {
    return a * b;
}

function multiplyNumbers(a1, a2) {
    return multiply.apply(null, [a1, a2]);
}

console.log(multiplyNumbers(5, 3)); 