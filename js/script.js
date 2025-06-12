'use strict';

/*VARIABILI*/
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
    // {
    //     linkName: "shop",
    //     title: "Vai al carrello",
    //     url: "/#total-price"
    // },
]
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
        description: "Vestito con texture a palloncino.",
        path: "./assets/img/01.png"
    },
    {
        id: 2,
        name: "Camicia rosa",
        category: "Bottoms",
        price: 49.99,
        sizes: ["28", "30", "32", "34", "36"],
        colors: [
            { name: "Dark Blue", hex: "#1A2C42" },
            { name: "Light Blue", hex: "#8CBED6" }
        ],
        inStock: true,
        description: "Camicia a righe misto lino.",
        path: "./assets/img/02.png"
    },
    {
        id: 3,
        name: "Bermuda Beage",
        category: "Footwear",
        price: 89.99,
        sizes: ["40", "41", "42", "43", "44", "45"],
        colors: [
            { name: "Red", hex: "#E53935" },
            { name: "Black", hex: "#000000" }
        ],
        inStock: false,
        description: "Bermuda a vita alta in lino.",
        path: "./assets/img/03.png"
    },
    {
        id: 4,
        name: "Bermuda Bianchi",
        category: "Outerwear",
        price: 109.99,
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Navy", hex: "#000080" }
        ],
        inStock: true,
        description: "Bermuda a vita alta in lino.",
        path: "./assets/img/04.png"
    },
    {
        id: 5,
        name: "Bermuda Jeans",
        category: "Outerwear",
        price: 109.99,
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Navy", hex: "#000080" }
        ],
        inStock: true,
        description: "Bermuda in demin TRF Paper Bag a vita alta.",
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
const ulListProducts = document.getElementById('list-products');
const catalogue = document.getElementById('product-catalogue');
let cart = [];
let active = false;
const buttonShow = document.getElementById("show-button");
let count = 0;
const cartElement = document.getElementById("shopping-cart");
const detailContent = document.getElementById("details");
const navElement = document.getElementById("nav-links");
// const shopLink = navElement.querySelectorAll('.link:last-child a');
const counter = document.getElementById("count-items");
const summaryElement = document.getElementById('riepilogue');
const total = document.getElementById('total-price');

/*FUNZIONI*/
function addToCart(id) {
    const product = productCatalog.find(element => element.id === id);
    if (!product) {
        return;
    } else {
        cart.push({ product });
        return cart;
    }
}

function updateItems() {
    counter.innerText = cart.length;
    return counter;
}

function summaryCart() {
    summaryElement.innerHTML = '';
    const totalPriceSection = document.getElementById('total-price');

    // Nasconde il bottone se presente
    const checkoutBtn = document.getElementById('checkout-button');
    if (checkoutBtn) checkoutBtn.classList.add('d-none');

    if (cart.length === 0) {
        summaryElement.innerHTML = '<li>Carrello vuoto</li>';
        return;
    }

    let total = 0;

    cart.forEach(({ product }) => {
        const liInCart = document.createElement("li");
        liInCart.innerText = `${product.name} - ${product.price.toFixed(2)} €`;
        summaryElement.appendChild(liInCart);
        total += product.price;
    });

    const totalElement = document.createElement("li");
    totalElement.style.fontWeight = "bold";
    totalElement.innerText = `Totale: ${total.toFixed(2)} €`;
    summaryElement.appendChild(totalElement);

    // Mostra il pulsante solo se il carrello ha elementi
    if (!checkoutBtn) {
        const checkoutButton = document.createElement('button');
        checkoutButton.id = 'checkout-button';
        checkoutButton.className = 'btn p-8';
        checkoutButton.innerText = 'Procedi al pagamento';
        totalPriceSection.appendChild(checkoutButton);
    } else {
        checkoutBtn.classList.remove('d-none');
    }
}

function emptyCart() {
    cart = [];
    updateItems();
    summaryCart();
}

/*OPERAZIONI*/


buttonShow.addEventListener('click', function () {
    if (active !== false) {
        catalogue.classList.remove("d-none");
        cartElement.classList.remove("d-none");
        buttonShow.innerText = 'Hide All';
        console.log(cartElement);
        return active = false;
    } else {
        buttonShow.innerText = 'Show All';
        cartElement.classList.add("d-none");
        catalogue.classList.add("d-none");
        return active = true;;
    }
});



navLinks.forEach(element => {
    let liElement = document.createElement("li");
    liElement.classList.add('link');
    let aElement = document.createElement("a");
    aElement.innerText = element.linkName;
    aElement.href = element.url;
    aElement.title = element.title;
    aElement.classList.add = "cursor";
    liElement.append(aElement);
    ulListLink.append(liElement);
});

productCatalog.forEach(element => {
    let buttonCart = document.createElement('button');
    buttonCart.classList = 'add-cart text-center btn cursor';
    buttonCart.innerHTML = '+';
    buttonCart.dataset.id = element.id;
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
    liElement.append(buttonCart);
    divElement.append(pDesc);
    divElement.append(pPrice);
    liElement.append(divElement);
    ulListProducts.append(liElement);

    buttonCart.addEventListener('click', function () {
        const id = parseInt(this.dataset.id, 10);
        addToCart(id);
        updateItems();
    });
})

cartElement.addEventListener('click', () => {
    summaryCart();

    catalogue.classList.add('d-none');

    total.classList.remove('d-none');

    // Aggiunta pulsanti solo se non già presenti
    // if (!document.getElementById('checkout-button')) {
    //     const checkoutButton = document.createElement('button');
    //     checkoutButton.id = 'checkout-button';
    //     checkoutButton.className = 'btn p-8';
    //     checkoutButton.innerText = 'Procedi al pagamento';
    //     total.appendChild(checkoutButton);
    // }

    if (!document.getElementById('empty-cart-button')) {
        const emptyButton = document.createElement('button');
        emptyButton.id = 'empty-cart-button';
        emptyButton.className = 'btn p-8';
        emptyButton.innerText = 'Svuota carrello';
        emptyButton.addEventListener('click', emptyCart);
        total.appendChild(emptyButton);
    }

    if (!document.getElementById('go-catalogue-button')) {
        const goCatalogue = document.createElement('button');
        goCatalogue.id = 'go-catalogue-button';
        goCatalogue.className = 'btn p-8';
        goCatalogue.innerText = 'Torna al catalogo';

        goCatalogue.addEventListener('click', () => {
            total.classList.add('d-none');
            catalogue.classList.remove('d-none');

            // Rimuove i bottoni dal DOM (opzionale, se vuoi rigenerarli ogni volta)
            ['checkout-button', 'empty-cart-button', 'go-catalogue-button'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.remove();
            });
        });

        total.appendChild(goCatalogue);
    }
})

