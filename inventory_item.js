function createInventoryItem(name, category, price) {
    return {
      name,
      category,
      price,
      describeItem() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
      }
    };
  }
  
  function addItemDiscount(inventoryItem, discountPercent) {
    inventoryItem.discountedPrice = inventoryItem.price * (1 - discountPercent / 100);
    inventoryItem.applyDiscount = function() {
      console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
    };
    return inventoryItem;
  }
  
  
  let item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem();
  
let discountedItem = addItemDiscount(item, 10);
  discountedItem.applyDiscount();
  