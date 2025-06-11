'use strict';

let navLinks = [
    {
        linkName: "home",
        title: "Vai in home",
        url: "./index.html"
    },
    {
        linkName: "about",
        title: "Vai a about",
        url: "./about.html"
    },
    {
        linkName: "contact",
        title: "Vai a contact",
        url: "./contact.html"
    },
    {
        linkName: "shop",
        title: "Vai al carrello",
        url: "./carrello.html"
    },
]

let cart = [];
const productCatalog = [
    {
        id: 1,
        name: "Classic White Dress",
        category: "Dress",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: true,
        description: "A classic fit white t-shirt made from 100% organic cotton.",
        path: "./assets/img/01.png"
    },
    {
        id: 2,
        name: "Denim Jeans",
        category: "Bottoms",
        price: 49.99,
        sizes: ["28", "30", "32", "34", "36"],
        colors: [
            { name: "Dark Blue", hex: "#1A2C42" },
            { name: "Light Blue", hex: "#8CBED6" }
        ],
        inStock: true,
        description: "Slim fit stretch denim jeans with 5 pockets.",
        path: "./assets/img/02.png"
    },
    {
        id: 3,
        name: "Running Sneakers",
        category: "Footwear",
        price: 89.99,
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: [
            { name: "Red", hex: "#E53935" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: false,
        description: "Lightweight and comfortable sneakers designed for running.",
        path: "./assets/img/03.png"
    },
    {
        id: 4,
        name: "Bomber Jacket",
        category: "Outerwear",
        price: 109.99,
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Navy", hex: "#000080" }
        ],
        inStock: true,
        description: "Warm and stylish bomber jacket with zipper closure.",
        path: "./assets/img/04.png"
    },
    {
        id: 5,
        name: "Bomber Jacket",
        category: "Outerwear",
        price: 109.99,
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Navy", hex: "#000080" }
        ],
        inStock: true,
        description: "Warm and stylish bomber jacket with zipper closure.",
        path: "./assets/img/05.png"
    },
    {
        id: 6,
        name: "Classic White Dress",
        category: "Dress",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: true,
        description: "A classic fit white t-shirt made from 100% organic cotton.",
        path: "./assets/img/06.png"
    },

    {
        id: 7,
        name: "Running Sneakers",
        category: "Footwear",
        price: 89.99,
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: [
            { name: "Red", hex: "#E53935" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: false,
        description: "Lightweight and comfortable sneakers designed for running.",
        path: "./assets/img/07.png"
    },
    {
        id: 8,
        name: "Denim Jeans",
        category: "Bottoms",
        price: 49.99,
        sizes: ["28", "30", "32", "34", "36"],
        colors: [
            { name: "Dark Blue", hex: "#1A2C42" },
            { name: "Light Blue", hex: "#8CBED6" }
        ],
        inStock: true,
        description: "Slim fit stretch denim jeans with 5 pockets.",
        path: "./assets/img/08.png"
    },
    
];

const ulListLink = document.getElementById('nav-links');
ulListLink.className = "d-flex gap-8";

navLinks.forEach(element => {
    let liElement = document.createElement("li");
    let aElement = document.createElement("a");
    aElement.innerText = element.linkName;
    aElement.href = element.url;
    aElement.title = element.title;
    liElement.append(aElement);
    ulListLink.append(liElement);
});

const ulListProducts = document.getElementById('list-products');

productCatalog.forEach(element => {
    let liElement = document.createElement("li");
    let h3Element = document.createElement("h3");
    let pDesc = document.createElement("p");
    let pPrice = document.createElement("p");
    let imgElement = document.createElement("img");
    let divElement = document.createElement("div");
    divElement.classList = "p-8";
    liElement.className = "card-product";
    h3Element.innerHTML = element.name;
    pDesc.innerHTML = element.description;
    pPrice.innerHTML = `${element.price} €`;
    imgElement.src = element.path;
    imgElement.alt = `Foto ${element.name}`;
    imgElement.classList = "img-fluid";
    liElement.append(h3Element);
    liElement.append(imgElement);
    divElement.append(pDesc);
    divElement.append(pPrice);
    liElement.append(divElement);
    ulListProducts.append(liElement)
})

