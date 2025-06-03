//Index Signatures

// interface TransactionObj{
//    readonly [index: string]: number
// }
interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number,
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 40; // Error: Cannot assign to 'Pizza' because it is a read-only property.

console.log(todaysTransactions['Batu']);

/////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | undefined | number[]; // Index signature allows for any string key with value types of string, number, or number array
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Batu",
    GPA: 2.52,
    classes: [100, 200]
}

// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKeys = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKeys(student, 'GPA');

/////////////////////////////////////////////////////////////////////////

// interface Incomes{
//     [key: string]: number
// }

type Streams = 'salary' | 'Side Hustle' | 'bonus';

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
    salary: 5000,
    'Side Hustle': 1500,
    bonus: 500,
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    // console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
}