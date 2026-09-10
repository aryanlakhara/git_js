// /**
// variables
// */

// Var is older version to define variable can be redeclare and reassign

// var name="rohit";
// var name="mohit";
// name="Sohit";
// console.log(name)

// Let comes in es6 can reassign only.

// let name="mohit";
//  name="rohit";
// console.log(name)

// Const comes in es6 Neither redeclare nor reassign;
// const name="rohit";
// name="mohit";
// console.log(name)

// Data types
// 1. String
// let str='squad';
// let num=2;
// let flag=true;

// console.log(a)
// console.log(typeof(str))

let a = 5;
let b = 6;
let mul = a * b; // 30
let add = a + b; //11
let sub = a - b; //-1
let div = a / b; //0.
let rem = a % b; //0

console.log(mul, add, sub, div.toFixed(2), rem);

let c = 1;
c = c + 5;
c += 1;
console.log(c);

// comparison operators
// let x=6;
// let y=5;
// console.log(x>y)
// == vs ===
// console.log(2=="2");

// let num="2";
// num=Number(num);
// console.log(typeof(num)) explicit

// let ans = 2 + "2";
// // treat "2"+"2"
// console.log(ans);
// let city = "Jaipur";
// console.log("I am in "             + city);

// Logical Operators

// &&
let age = 17;
let gender = "male";
// if (age > 18 ||  gender == "male" ) {
//   console.log("You are free");
// }
// else{
//     console.log("forbidden")
// }
// && and ||
let flag = false;
// if(flag==false){
//     console.log("NO")
// }
// else{
//     console.log('Yes')
// }
// let ans=flag==true?"Yes":"No";
// console.log(ans)

// if else
// let num=15;
// if(num%5==0){
//     console.log("fizz")
// }
//     else if(num%3==0){
//     console.log("buzz")
// }
// else{
//     console.log('fizzbuzz')
// }
// if(1){
//     console.log("true value")
// }
// let day = "mon";
// switch (day) {
//   case "tue": {
//     console.log("tuesday");
//     break;
//   }
//   case "mon": {
//     console.log("Monday");
//     break;
//   }
//   case "wed": {
//     console.log("wednesday");
//   }
//   default: {
//     console.log("invlid input");
//   }
// }
// for i in Range(5):
//      print()

// for (let i = 0; i < 5; i++) {
//   if (i == 2) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }
// let i=5;

// while(i<10){
//     i++;
//     console.log(i)
// }