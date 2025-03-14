function reorderCosts(products) {
   
    const lowStockProducts = products.filter(p => p.stock < 100);

    const reorderData = lowStockProducts.map(p => ({
        category: p.category,
        cost: p.pricePerUnit * (100 - p.stock)
    }));

    const categoryCosts = reorderData.reduce((acc, { category, cost }) => {
        acc[category] = (acc[category] || 0) + cost;
        return acc;
    }, {});

    return Object.fromEntries(
        Object.entries(categoryCosts).sort((a, b) => b[1] - a[1])
    );
}

// Example usage
const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
];

console.log(reorderCosts(products));
