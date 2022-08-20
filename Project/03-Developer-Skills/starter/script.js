// Remember, we're gonna use strict mode in all scripts now!
'use strict';
let inputArr = [12, 5, -5, 0, 4];
function printForecast(arr) {
    let string = ``;
    for (let i = 0; i < arr.length; i++) {
        string += `${arr[i]}°C in ${i + 1} days... `;
    }
    return string;
}
console.log(printForecast(inputArr));