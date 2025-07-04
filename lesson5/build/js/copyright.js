"use strict";
//Original Js Code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year?.setAttribute('datetime', thisYear)
// year?.textContent = thisYear
//My Solution
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear() as unknown as string
// if (year) {
// year.setAttribute('datetime', thisYear)
// 	year.textContent = thisYear;
// }
// //1st variation
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }
//2nd variation
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
