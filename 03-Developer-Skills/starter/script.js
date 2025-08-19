'use strict';

// const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function calcTemp() {
//     let max = temp[0];
//     let min = temp[0];
//     let count = 0;
//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] > max) max = temp[i];
//         if (temp[i] < min) min = temp[i];
//         if (temp[i] === 'error') count++;
//     }
//     console.log('Max:', max, " Min:", min);
//     console.log('Amplitude: ', max - min);
//     console.log('Errors Found: ', count);
// }
// calcTemp(temp);

// function measure(){
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: 10,
//     };
//     console.table(measurement);

//     const kelvin = measurement.value + 275;
//     return kelvin;
// } 
// console.log(measure());

function printForecast(){
    const arr = [17, 21, 23];
    let row = "";
    for(let i = 0 ; i < arr.length; i ++){
        row += `... ${arr[i]}ºC in ${i + 1} days . `;
    }
    console.log(row);
}
printForecast();