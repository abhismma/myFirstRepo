function createBankAccount(bal){
    return {
      deposit(amt){
        bal=bal+amt;
        return bal;
      },withdraw(amt) {
        if (amt > bal) { 
          return "Insufficient funds";
        }else{
          bal = bal - amt; 
          return bal;
        }
      },
      getBalance(){
        return bal;
      },
    }
  }
  const myAccount = createBankAccount(1000);  
  console.log(myAccount.deposit(500));   
  console.log(myAccount.withdraw(200));  
  console.log(myAccount.withdraw(1500)); 
  console.log(myAccount.getBalance());