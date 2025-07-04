function createBankAccount(initialBalance) {
    let balance = initialBalance;;
    return {
        deposit: (amount) => {
            if (amount > 0) balance += amount;
            return balance;
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: () => balance
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());


