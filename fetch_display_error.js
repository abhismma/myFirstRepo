async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const products = await response.json();
      console.log('Products:', products);
  
      // Display product details
      products.forEach(product => {
        console.log(`Title: ${product.title}, Price: $${product.price}`);
      });
  
      // Calculate the sum of all product prices using reduce
      const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
      console.log(`Total Price of Products: $${totalPrice}`);
    } catch (error) {
      console.error('Error:', error.message);
      console.log('Failed to fetch products. Please try again later.');
    }
  }
  
  fetchProducts();
  