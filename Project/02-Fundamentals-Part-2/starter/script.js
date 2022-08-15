// // // Array project
// // function calcTip(bill) {
// //     let tip;
// //     if (bill >= 50 && bill <= 300) {
// //         tip = (15 / 100) * bill;
// //     } else {
// //         tip = (20 / 100) * bill;
// //     }
// //     return tip
// // }
// // let bills = [125, 555, 44];
// // let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// // let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// // console.log(bills, tips, total);

// // // Object
// // const neiv = {
// //     firstName: `Neiv`,
// //     lastName: `Malaviya`,
// //     birthyear: 2006,
// //     age: 2022 - this.birthyear,
// //     job: `N/A`,
// //     friends: [`Vishaal`, `Riva`, `Pulakit`, `Devesh`],
// // }

// // // Coding Challenge 3.
// // const mark = {
// //     firstName: `Mark`,
// //     lastName: `Miller`,
// //     mass: 78,
// //     height: 1.69,
// //     calcBMI: function () {
// //         this.bmi = (this.mass / (this.height * this.height))
// //         return this.bmi;
// //     }
// // }
// // const john = {
// //     firstName: `John`,
// //     lastName: `Smith`,
// //     mass: 92,
// //     height: 1.95,
// //     calcBMI: function () {
// //         this.bmi = (this.mass / (this.height * this.height))
// //         return this.bmi;
// //     }
// // }
// // Coding Challenge 4.

// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = (15 / 100) * bill;
//     } else {
//         tip = (20 / 100) * bill;
//     }
//     return tip
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let total = [];

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     total[i] = tips[i] + bills[i];
// } console.log(total, tips, bills);


// const calcAverage = function (arr) {
//     let sum=0;
//     for (let value of arr) {
//         sum += value;
//     }
//     console.log(sum/arr.length);
// }
// calcAverage([2, 3, 7]);