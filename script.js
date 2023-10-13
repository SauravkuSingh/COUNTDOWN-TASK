alert("CountDown Begins");
// function callme() {
//   console.log("iam the call back function");
// }
// function greet(name, callback) {
//   console.log(`hello ${name}`);
//   callback();
// }
// greet("siddharth", callme);
// console.log("*********");
// function greetings(name) {
//   console.log(`hello${name}`);
// }
// function letSee(callback) {
//   let fullname = "sonu";
//   callback(fullname);
// }
// letSee(greetings);
// console.log("***********#######");

// function display(res, callback) {
//   console.log(`Total is ${res}`);
//   callback(result);
// }
// function sum(a, b) {
//   let add = a + b;
//   return add;
// }
// let result = sum(2, 4);
// display(result);
// console.log("***********#######");
// function display(res) {
//   console.log(`Total is ${res}`);
//   //callback(result);
// }
// function sum(a, b, callback) {
//   let add = a + b;
//   //return add;
//   callback(add);
// }
// let result = sum(2, 4);
// sum(display);
// var i = 10;
// setTimeout(function () {
//   console.log(i);
//   i--;
//   if (i > 0) {
//     setTimeout(arguments.callee, 1000);
//   } else {
//     console.log("Happy Independence Day!");
//   }
// }, 1000);
var i = 10;
setTimeout(function () {
  document.getElementById("countdown").innerHTML = i;
  i--;
  if (i > 0) {
    setTimeout(arguments.callee, 1000);
  } else {
    document.getElementById("countdown").innerHTML = "Happy Independence Day!";
  }
}, 1000);
