// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   });

// async function fetchData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// let facts = document.querySelector("#h4");
// let button = document.querySelector("#btn");

// button.addEventListener("click", async () => {
//   const data = await fetchData("https://catfact.ninja/fact");
//   h4.innerText = data.fact;
// });

// let dogImg = document.querySelector("#dog-img");
// let dogButton = document.querySelector("#button-dog");
// dogButton.addEventListener("click", async () => {
//   let response = await fetch("https://dog.ceo/api/breeds/image/random");
//   let data = await response.json();
//   // console.log(data.message);
//   dogImg.setAttribute("src", data.message);
// });

// const h1 = document.querySelector("#title");
// const p = document.querySelector("#desc");
// const img = document.querySelector("#img");
// const button = document.querySelector("#button");

// button.addEventListener("click", async () => {
//   const response = await fetch("https://dummyjson.com/products/10");
//   const data = await response.json();

//   h1.innerText = data.title;
//   p.innerText = data.description;
//   img.setAttribute("src", data.images[0]);
// });
// let h3 = document.querySelector("h3");
// async function products() {
//   const getData = await fetch("https://dummyjson.com/products");
//   const data = await getData.json();
//   console.log(getData);
//   console.log(
//     data.products.forEach((product) => {
//       let h3

//       console.log(product.title);
//       // h3.innerText = products.title;
//     }),
//   );
// }
// products();

let caturl = "https://catfact.ninja/fact";
let para = document.querySelector("#para");
let catbutton = document.querySelector("#btn");

async function getFacts() {
  console.log("getting...");
  let response = await fetch(caturl);
  console.log(response);
  let data = await response.json();
  // console.log(data.fact);
  para.innerText = data.fact;
}
catbutton.addEventListener("click", getFacts);

// let producUrl = "https://dummyjson.com/products";
// let producttitle = document.querySelector("#title");
// let button2 = document.querySelector("#btn2");

// async function getProducts() {
//   let response = await fetch(producUrl);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   data.products.forEach((element) => {
//     producttitle.innerText = element.id;
//   });
// }

// button2.addEventListener("click", getProducts);

// let url = "https://picsum.photos/id/1/info";
// async function getImages() {
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data.img);
// }
// getImages();

let url = "https://fakestoreapi.com/products";
let products = document.querySelector("#products");
let button = document.querySelector("#getProducts");
// products.style.border = "1px solid black";
// let productImg = document.querySelector("#product-img");
// productImg.style.width = "150px";

async function productsData() {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  //   console.log(data[0].image);
  //   productImg.setAttribute("src", data[0].image);
  data.forEach((elements) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "200px";
    card.style.border = "1px solid black";
    card.style.display = "flex";
    // card.style.alignItems = "center";
    card.style.backgroundColor = "blue";

    let price = document.createElement("h3");
    price.innerText = `Price: $${elements.price}`;

    let Img = document.createElement("img");
    Img.style.width = "150px";
    Img.style.margin = "10px";
    // Img.style.border = "1px solid black";
    Img.style.boxShadow = "2px 2px 6px gray";

    let title = document.createElement("p");
    title.innerText = elements.title;

    let id = document.createElement("p");
    id.innerText = elements.id;
    Img.setAttribute("src", elements.image);

    products.appendChild(id);
    products.appendChild(Img);
    products.appendChild(title);
    products.appendChild(price);

    products.appendChild(card);
  });
  //   data.forEach((elem) => {
  //     let title = document.createElement("p");
  //     title.innerText = elem.title;
  //     products.appendChild(title);
  //   });
}
button.addEventListener("click", productsData);
