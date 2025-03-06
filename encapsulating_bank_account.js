function createBankAccount(balance) {
    return {
      deposit: amount => (amount > 0 ? (balance += amount) : "Invalid amount"),
      withdraw: amount => (amount > balance ? "Insufficient funds" : (balance -= amount)),
      getBalance: () => balance
    };
  }
  
  // Example usage
  const account = createBankAccount(100);
  console.log(account.deposit(50));  // 150
  console.log(account.withdraw(30)); // 120
  console.log(account.getBalance()); // 120
  console.log(account.balance);      // undefined (private)
  