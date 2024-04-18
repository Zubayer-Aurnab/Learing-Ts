"use strict";
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply(11, 5));
const userDetails = (id, user) => {
    console.log(`USer id is ${id} and name is ${user.name}user age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.name} ${user.age > 50 ? "sir" : "mr."} ${user.age}`);
};
