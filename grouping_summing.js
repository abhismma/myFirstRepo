function countCategories(arr) {
    return arr.reduce((acc, cat) => (acc[cat] = (acc[cat] || 0) + 1, acc), {});
}

function sortedCategoriesByCount(arr) {
    return Object.entries(countCategories(arr))
        .sort((a, b) => b[1] - a[1])
        .map(([cat]) => cat);
}


const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(categories)); 
console.log(sortedCategoriesByCount(categories)); 
