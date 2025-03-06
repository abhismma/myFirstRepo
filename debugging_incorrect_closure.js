function createFunctionList() {
    return [...Array(5)].map((_, i) => () => console.log("Index:", i));
  }
  
  const functionList = createFunctionList();
  functionList[0](); // Output: "Index: 0"
  functionList[1](); // Output: "Index: 1"
  functionList[2](); // Output: "Index: 2"
  functionList[3](); // Output: "Index: 3"
  functionList[4](); // Output: "Index: 4"

  function createFunctionList() {
    let functions = [];
    for (var i = 0; i < 5; i++) { // Still using var
      (function (index) { // IIFE captures the current index
        functions.push(function () {
          console.log("Index:", index);
        });
      })(i);
    }
    return functions;
  }
  
 
  functionList[0](); // Output: "Index: 0"
  functionList[1](); // Output: "Index: 1"
  functionList[2](); // Output: "Index: 2"
  functionList[3](); // Output: "Index: 3"
  functionList[4](); // Output: "Index: 4"
  

  function createFunctionList() {
    let functions = [];
    for (let i = 0; i < 5; i++) { // Use let instead of var
      functions.push(function () {
        console.log("Index:", i);
      });
    }
    return functions;
  }
  
  
  functionList[0](); // Output: "Index: 0"
  functionList[1](); // Output: "Index: 1"
  functionList[2](); // Output: "Index: 2"
  functionList[3](); // Output: "Index: 3"
  functionList[4](); // Output: "Index: 4"
  