"use strict";
//Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; // Error: Cannot assign to 'Pizza' because it is a read-only property.
console.log(todaysTransactions['Batu']);
const student = {
    name: "Batu",
    GPA: 2.52,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKeys = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKeys(student, 'GPA');
const monthlyIncomes = {
    salary: 5000,
    'Side Hustle': 1500,
    bonus: 500,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
    // console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
}
