let userInpute = "   HeLLo jaVAScriPT  ";
let cleanInpute = userInpute.trim().toLowerCase();
console.log(userInpute);
console.log(cleanInpute);

let email = "  USER@EXAMPLE.COM";
let formattedEmail = email.trim().toLowerCase();
console.log(formattedEmail);

let sentence = "JavaScript is awesome and JavaScript is fun";
let cleanSentence = sentence.indexOf("awesome");
console.log(cleanSentence);
console.log(sentence.indexOf("JavaScript"));
console.log(sentence.indexOf("python"));

let password = " MyP@ssw0rd123";
let securePassword = password.trim().toUpperCase().slice(0, 9);
console.log(securePassword);

let phone = "9876543210";
let areaCode = phone.slice(0, 4);
let lastFour = phone.slice(6);
console.log(`area code: ${areaCode}, last four: ${lastFour}`);

let announcement = "The event will happen on Monday and Monday only";
let updatedAnnouncement = announcement.replace("Monday", "friday");
console.log(updatedAnnouncement);

let playList = [];
playList.push("song1");
playList.push("song2");
playList.push("song3");
console.log(playList);
playList.pop();
playList.unshift("song0");
console.log(playList);

let fruits = ["apple", "banana", "mango", "orange", "banana"];
let index = fruits.indexOf("mango");
console.log(fruits.indexOf("banana"));
console.log(index);
console.log(fruits.indexOf("graps"));
