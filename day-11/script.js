// let solarImg = document.querySelector("img");
// let attri = solarImg.getAttribute("class");
// console.log(attri);

// let setatr = document.querySelector("h2");
// setatr.setAttribute("id", "overView");
// console.log(setatr);

// let changeImg = document.querySelector("#firstImg");
// changeImg.setAttribute(
//   "src",
//   "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
// );

// console.log(changeImg);

// let heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "orange";

// let para = document.querySelector("p");
// para.style.color = "black";
// para.style.fontSize = "25px";
// para.style.padding = "25px";

// let stylingImg = document.querySelector("img");
// stylingImg.style.width = "300px";
// stylingImg.style.height = "300px";
// stylingImg.style.borderRadius = "45%";
// console.log(stylingImg);

// let para = document.querySelector("p");
// para.classList.add("green");
// para.classList.remove("green");
// console.log(para);
// console.log(para.classList.contains("green"));

// let addingClass = document.querySelector("h1");
// addingClass.classList.add("heading1");
// console.log(addingClass);

// let box = document.querySelector("#box");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   box.classList.toggle("highlight");
// });

// let newBtn = document.createElement("button");
// newBtn.innerText = "my new button";
// let box = document.querySelector(".box");
// box.appendChild(newBtn);
// newBtn.style.padding = "5px";
// console.log(newBtn);

// let heading3 = document.createElement("h3");
// heading3.innerText = "i created h3 using js";

// let body = document.querySelector("body");
// body.prepend(heading3);

// let newSpan = document.createElement("span");
// newSpan.innerText = "🎉!";

// let heading = document.querySelector("h1");
// heading.insertAdjacentElement("beforeend", newSpan);

// let list = document.createElement("ul");
// let item1 = document.createElement("li");
// item1.innerText = "neptune:Ice Giant";

// let item2 = document.createElement("li");
// item2.innerText = "uranus: Ice Giant";

// list.appendChild(item1);
// list.appendChild(item2);
// console.log(list);

// let imgRvm = document.querySelector(".oldImg");
// imgRvm.remove();

let mainImg1 = document.querySelector("#mainImg");
mainImg1.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPufNS0z70fnZptV6KfvUljrn_LMPl_mnZY9v8oPipQ&s=10",
);
mainImg1.setAttribute("id", "spaceImage");
console.log(mainImg1);

let para = document.querySelector(".description");
para.classList.add("highlight");
let checkPara = para.classList.contains("highlight");
console.log(para);
console.log(checkPara);

let newH3 = document.createElement("h3");
newH3.innerText = "created by js ";
let desc = document.querySelector(".description");
desc.insertAdjacentElement("beforebegin", newH3);
