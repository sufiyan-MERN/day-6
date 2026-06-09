// let userName = "  sufiyan  ";
// console.log(userName.trim());
// let email = "  sufiyan@gmail.com  ";
// let cleanEmail = email.trim();
// console.log(cleanEmail);

// let gtreeting = "hello";
// console.log(gtreeting.toUpperCase());

// let text = "  hello  ";
// let afterMethods = text.trim().toUpperCase();
// console.log(text);
// console.log(afterMethods);

// let text = "hello";
// console.log(text.indexOf("o"));

// let sentence = "helo world";
// console.log(sentence.indexOf("w"));

// let message = "welcome to coding";
// if (message.indexOf("to") !== -1) {
//   console.log(message);
// }

let text = "   hello world";
let output = text.trim().toLowerCase().replace("hello", "hi");
console.log(output.replace("hi", "my"));

let word = "mountain";
let slice = word.slice(0, 5);
console.log(slice);
console.log(word.slice(4));

let lang = "java script";
console.log(lang);
let seperate = lang.slice(0, 4);
console.log(seperate);
console.log(lang.slice(5));
