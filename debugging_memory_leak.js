function createHeavyDataHandler() {
    let largeData = new Array(1000000).fill(0); 
    
    function processData() {
      if (largeData) {
        console.log("Processing data of size:", largeData.length);
      } else {
        console.log("No data available");
      }
    }
  
    function clearData() {
      console.log("Clearing data");
      largeData = null; // Attempt to free memory
    }
  
    return {
      processData,
      clearData: function() {
        clearData();
        // Explicitly remove references
        this.processData = null; 
        this.clearData = null;
      }
    };
  }
  
  const handler = createHeavyDataHandler();
  handler.processData();  // Output: Processing data of size: 1000000
  handler.clearData();    // Output: Clearing data
  
  // Ensure memory is released
  console.log(handler.processData); // Output: null
  console.log(handler.clearData);   // Output: null
  