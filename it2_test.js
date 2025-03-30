function processOrder(orderId, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 3000);
}


function confirmOrder(orderId) {
    console.log(`Order ${orderId} has been processed.`);
}

processOrder(12345, confirmOrder);
processOrder(101, (id) => console.log(`Order ${id} processed successfully!`));



function searchProduct(query) {
    const product = data.find(item => item.title.toLowerCase() === query.toLowerCase());
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}

function calculateElectronicsTotal() {
    const total = data.filter(item => item.category === "electronics")
                      .reduce((sum, item) => sum + item.price, 0);
    console.log(`Final electronics price: ${total}`);
    return total;
}

function sortProductsByTitle() {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    console.log(sortedData);
}

function calculateDiscountedTotal() {
    const total = data.reduce((sum, item) => {
        let price = item.price;
        if ((item.title.match(/a/gi) || []).length >= 2) {
            price *= 0.9;
        }
        return sum + price;
    }, 0);
    console.log(`Final price after discount: ${total}`);
    return total;
}



let data = [];

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        data = await response.json();
        console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchProducts();