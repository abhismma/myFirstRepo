// Functional Requirements
// Function Registry Using Closures
// Implement createFunctionRegistry() that returns an object with methods to register and manage functions.
// The registry of functions must remain private and only be accessible via specific methods.
// Register Functions Dynamically
// Implement registerFunction(name, fn) to store a function under a given name.
// Execute Functions with Arguments & this Handling
// Implement executeFunction(name, args, context = null).
// This should execute the function with given args and bind this to context using .call(), .apply(), or .bind().
// Transform Data Using Higher-Order Functions
// Implement mapFunction(name, dataArray).
// This should take an array of data, execute the registered function for each item, and return a transformed array.
// Filter Data Using Higher-Order Functions
// Implement filterFunction(name, dataArray).
// This should take an array of data, execute the registered function for each item, and return only items where the function returns true.
// Reduce Data Using Higher-Order Functions
// Implement reduceFunction(name, dataArray, initialValue).
// This should take an array of data, execute the registered function as a reducer, and return the accumulated result.
// Execute Functions Asynchronously
// Implement executeFunctionAsync(name, args, delay).
// This should return a Promise that resolves after a delay (in milliseconds) and executes the function asynchronously.
// Export Registered Functions As JSON
// Implement exportRegistry() that returns all registered function names in JSON format.
// Expected Input & Output
// Example 1: Register and Execute Function
// Input:
// const registry = createFunctionRegistry();
// registry.registerFunction("double", x => x * 2);
// console.log(registry.executeFunction("double", [5]));

// Output:
// 10


function createFunctionRegistry(){
    let registry = {};
    return {
        registerFunction : function(name,fn){
            if(typeOf fn !=="function"){
                throw new Error("Only function can be registerd");
            };
            registry[name]=fn;
        },
        executeFunction : function(name, ...args){
            if(!registry[name]) {
                throw new Error(`Function '${name}'not found`);
            }
            return registry[name](...args);
        }, 
         listFunctions:function(){
            return Object.keys(registry);
         }
    };
}
let functionRegistry = createFunctionRegistry();

// Registring function 
functionRegistry.registerFunction("Greet", name => `Hello. ${name}!`);
functionRegistry.registerFunction("add", (a,b)=> a+b);
functionRegistry.registerFunction("multiply",(a,b)=>a*b);

console.log("Registered Function", functionRegistry.listFunctions());

