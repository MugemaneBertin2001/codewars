const numbers =[0,1,4,3,2343,09]

// let sum=0

// for(let x of numbers){
//     sum= sum+x
// }
const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum)