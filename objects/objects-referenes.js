let myAccount = {
  name: "Leonardo Otoni",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
  //console.log(account);
};

let addIncome = function(account, income) {
  account.income += income;
};

//resetAccount -> reset the expenses to zero
let resetAccount = function(account) {
  account.expenses = 0;
};

//Account for Leonardo has $900. $1000 in income. $100 in expenses.
getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${
    account.income
  } in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 100);
addExpense(myAccount, 200);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

addExpense(myAccount, 2.5);
console.log(myAccount);
