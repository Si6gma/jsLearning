// Array project
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = (15 / 100) * bill;
    } else {
        tip = (20 / 100) * bill;
    }
    return tip
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(bills, tips, total);

// Object
const neiv = {
    firstName: `Neiv`,
    lastName: `Malaviya`,
    birthyear: 2006,
    age: 2022 - this.birthyear,
    job: `N/A`,
    friends: [`Vishaal`, `Riva`, `Pulakit`, `Devesh`],
}

// Coding Challenge 3.
const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi;
    }
}
const john = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi;
    }
}
// LOOPS
