// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let j = 2; j <= 20; j++) {
//   console.log(j);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

// let num = 7;

// for (let i = 1; i <= 10; i++) {
//   // let product = num * i;
//   console.log(`${num}x${i}=${num * i}`);
// }

// for (let i = 1; i <= 4; i++) {
//   console.log("--", i);
//   for (let j = 1; j <= 4; j++) {
//     console.log(j);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; i++) {
//     console.log();
//   }
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fist number divisibele by 3 and 5 is : ", i);
    break;
  }
}
