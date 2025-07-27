function createBankAccount(initialBal) {
    let bal = initialBal;

    return {
        deposit: function (amt) {
            if (amt <= 0) {
                return 'Amount must be positive.';
            }
            bal += amt;
            return bal;
        },
        withdraw: function (amt) {
            if (amt <= 0) {
                return 'Amount must be positive.';
            }
            if (amt > bal) {
                return 'Insufficient amount.';
            }
            bal -= amt;
            return bal;
        },
        getBalance: function () {
            return bal;
        }
    };
}

const account = createBankAccount(100);

console.log(account.deposit(50));   
console.log(account.withdraw(30));    
console.log(account.getBalance());    

console.log(account.balance);      

