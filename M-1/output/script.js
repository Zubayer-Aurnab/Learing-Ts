"use strict";
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply(11, 5));
//array
// let a: (string | number)[] = [];
// a.push("asd");
// //object
// let c: {
//   name: string;
//   age: number;
//   adult: boolean;
// };
// c = {
//   name: "Aurnab",
//   age: 10,
//   adult: true,
// };
// let b: any;
// b = 5;
// b = "string";
// console.log(b);
// let q: any[] = [];
// q.push("bangladesh");
// console.log(q);
///// function
// let myFnc: Function;
// myFnc = (a: string, b: string, c: string = "true") : string => {
//   console.log(c);
//   console.log(`hello ${a} + ${b}`);
//   return a + " " + b + " " + c;
// };
// console.log(myFnc("zuba", "aur"));
// type stringOrNum = string | number;
// type userType = { name: string; age: number };
// const userDetails = (id: stringOrNum, user: userType) => {
//   console.log(
//     `USer id is ${id} and name is ${user.name}user age is ${user.age}`
//   );
// };
// const sayHello = (user: userType) => {
//   console.log(
//     `hello ${user.name} ${user.age > 50 ? "sir" : "mr."} ${user.age}`
//   );
// };
let add;
add = (a, b) => {
    return a + b;
};
add(54, 76);
