// Function to filter even numbers using filter()
function filterEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

// Function to calculate sum of array using reduce()
function sumOfArray(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}

// Function to sort two arrays and concatenate them using sort() and concat()
function sortAndConcat(arr1, arr2) {
    let sortedArr1 = arr1.slice().sort(function(a, b) {
        return a - b;
    });
    let sortedArr2 = arr2.slice().sort(function(a, b) {
        return a - b;
    }); 
    return sortedArr1.concat(sortedArr2); // Concatenate both arrays
}


let arr1 = [5, 2, 9, 1, 6];
let  arr2 = [8, 3, 7, 4, 10];

console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
console.log( sortAndConcat(arr1, arr2));

