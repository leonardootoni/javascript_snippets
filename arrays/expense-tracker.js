const account = {
  name: "Leonardo",
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  addIncome: function(description, amount) {
    this.income.push({ description, amount });
  },
  getAccountSummary: function() {
    let totalExpense = 0;
    let totalIncome = 0;
    this.expenses.forEach(function(expense) {
      totalExpense += expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncome += income.amount;
    });

    return `${this.name} has a balance of $${totalIncome -
      totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses.`;
  }
};

//Expense -> Description, amount $
//methods: addExpense (description, amount)
account.addExpense("Coffee", 2.5);
account.addExpense("Suppermarket", 180.38);

// getAccountSummary() -> print the total up of all expenses ->  Leonardo has $ 123.00 in expenses.
//console.log(account.getAccountSummary());

//1- add income array to account;
//2- addIncome method -> descripton, amount
account.addIncome("Salary Aug-2018", 6000.0);

//3- Tweak getAccountSummary
//Leonardo has a balance of $10. $100 in income. $90 in expenses.
console.log(account.getAccountSummary());
