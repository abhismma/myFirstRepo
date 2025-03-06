const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        let price = parseFloat(item.price); // Ensure price is a valid number
        if (isNaN(price) || price <= 0) {
            console.log("Invalid price.");
            return;
        }

        this.items.push({ ...item, price }); // Store price as a number
        this.total += price;
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`;
    }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Expected output: "Total: $103.45"
