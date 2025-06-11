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
        name: "Classic White T-Shirt",
        category: "Tops",
        price: 19.99,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: true,
        description: "A classic fit white t-shirt made from 100% organic cotton.",
        imageUrl: "https://example.com/images/white-tshirt.jpg"
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
        imageUrl: "https://example.com/images/denim-jeans.jpg"
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
        imageUrl: "https://example.com/images/running-sneakers.jpg"
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
        imageUrl: "https://example.com/images/bomber-jacket.jpg"
    }
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
    liElement.className = "card-product";
    h3Element.innerHTML = element.name;
    liElement.append(h3Element);
    ulListProducts.append(liElement)
})
