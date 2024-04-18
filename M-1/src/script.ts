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

let myFnc: Function;

myFnc = (a: string, b: string, c: string = "true") : string => {
  console.log(c);
  console.log(`hello ${a} + ${b}`);
  return a + " " + b + " " + c;
};

console.log(myFnc("zuba", "aur"));
