function createCounter() {
    let count = 0;
    return {
      increment: () => ++count,
      getCount: () => count
    };
  }
  
  
  const counter = createCounter();
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.getCount());  // 2
  console.log(counter.count);       // undefined (private)
  