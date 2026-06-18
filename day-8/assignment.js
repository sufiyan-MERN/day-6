// function getElements(array, index) {
//   try {
//     if (index < 0) {
//       console.log("index cannot be negative");
//     }
//     if (index >= array.length) {
//       console.log("index out of bounce");
//     }
//     return index;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getElements("apple", 0);
// getElements("banana", 1);
// getElements("mango", 2);

// Traditional functions - Convert these to arrow functions
// function celsiusToFahrenheit(celsius) {
// return (celsius * 9/5) + 32;
// }
// function fahrenheitToCelsius(fahrenheit) {
// return (fahrenheit -- 32) * 5/9;
// }

// let celsiusToFahrenheit = (celsius) => {
//   return (celsius * 9) / 5 + 32;
// };
// let fahrenheitToCelsius = (fahrenheit) => {
//   return ((fahrenheit - 32) * 5) / 9;
// };
// let weather = celsiusToFahrenheit(32);
// console.log(weather);

// let count = 11;
// let id2 = setInterval(() => {
//   count--;
//   console.log(count);
//   if (count == 0) {
//     clearInterval(id2);
//     console.log("time's up");
//   }
// }, 1000);

// animateText = (text) => {
//   prompt("enter your text", text);
// };

// let student = {
//   name: "alice",
//   subject: ["math", "science", "english"],
//   marks: [78, 93, 98],
//   calculateAverage() {
//     sum = 0;
//     sum = this.marks + this.marks.length;
//     return sum;
//   },
// };
// console.log(student.calculateAverage());


