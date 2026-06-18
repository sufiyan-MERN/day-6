// const account = {
//   holder: "sara",
//   balance: 5000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(
//       `${this.holder} deposited ${amount} new balance ${this.balance}`,
//     );
//   },
// };
// account.deposit(500);
// console.log("program starts");

// try {
//   console.log(a);
// } catch (error) {
//   console.log("caugh an error:variable not found");
// }
// console.log("program continues");
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       console.log("cannot divide by zero");
//     }
//     return a / b;
//   } catch (error) {
//     console.log("error", error);
//   }
//   return null;
// }
// console.log(divide(2, 5));
// console.log(divide(4, 0));

// const greet = (name) => {
//   return `hello ${name}`;
// };

// let person = greet("ali");
// console.log(person);

// const square = (num) => num * num;
// console.log(square(5));
// console.log(square(8));

// const calculateTax = (price, tax) => {
//   let total = price + price * tax;
//   return total;
// };
// console.log(calculateTax(100, 0.1));

// setTimeout(() => {
//   console.log("this will appear after 1s");
// }, 2000);
// console.log("continue");

// function greetUser(name) {
//   setTimeout(() => {
//     console.log(`welcome back ${name}`);
//   }, 3000);
// }
// greetUser("alice");

// let count = 0;
// let id = setInterval(() => {
//   count++;
//   console.log(`count ${count}`);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

// let intervalid = setInterval(() => {
//   console.log("repearting message");
// }, 3000);
// setTimeout(() => {
//   clearInterval(intervalid);
//   console.log("intervel stopped");
// }, 10000);

// let user = {
//   name: "sarah",
//   greet: function () {
//     setTimeout(() => {
//       console.log(`hello ${user.name}`);
//     }, 1000);
//   },
// };
// user.greet();
