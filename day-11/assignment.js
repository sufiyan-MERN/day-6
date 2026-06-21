let galleryTitle = document.querySelector("#gallery-title");
galleryTitle.style.color = "#007bff";
galleryTitle.style.textAlign = "center";
galleryTitle.style.borderBottom = "3px solid #007bff";

let button = document.createElement("button");
button.innerText = "click me!";
let addingBtton = document.querySelector(".gallery-container");
addingBtton.appendChild(button);

let img = document.querySelector("img");
button.addEventListener("click", () => {
  img.style.border = "5px solid gold";
  img.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
});

let info = document.querySelector("#info-section");
let btn = document.createElement("button");
btn.classList.add("highlight");
btn.innerText = "Highlight Info";

let infoSection = document.querySelector("#info-section");
infoSection.appendChild(btn);

btn.addEventListener("click", () => {
  infoSection.classList.toggle(highlight);
});

let fImg = document.querySelector("img");
let result = fImg.classList.contains("featured-img");
console.log(result);

let newImg = document.createElement("img");
newImg.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10",
);
newImg.setAttribute("alt", "new nature");
newImg.classList.add("thumbnail");

let adding = document.querySelector(".thumbnail-container");
adding.append(newImg);

let creatingSpan = document.createElement("span");
creatingSpan.innerText = "[Nature]";
let gettingh1 = document.querySelector("#gallery-title");
gettingh1.insertAdjacentElement("beforeend", creatingSpan);
creatingSpan.style.fontSize = "16px";
creatingSpan.style.color = "#6c757d";
