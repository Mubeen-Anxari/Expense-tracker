// let fruits = ["apple", "banana", "cherry", "date", "fig"];
// let foundFruit= fruits.find((fruit)=>fruit==="cherry")

import { document } from "postcss";

// console.log(foundFruit)
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


const add =[1,3,4,6,9,10]
const add1=add.reduce((a,b)=>{
    return a+b;
},5)
console.log(add1);
