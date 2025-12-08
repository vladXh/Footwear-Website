const products = [
    {
        image: "images/Product1.jpg",
        name: "NITRO 3 RUNNING",
        category: "MEN'S SHOES",
        price: "$ 159.95"
    },
    {
        image: "images/Product2.jpg",
        name: "PUMA XT 2",
        category: "MEN'S SHOES",
        price: "$ 129.50"
    },
    {
        image: "images/Product3.jpg",
        name: "RIDER FV SNEAKERS",
        category: "MEN'S SHOES",
        price: "$ 250.00"
    },
    {
        image: "images/Product4.jpg",
        name: "FANDOM SUEDE SHOES",
        category: "MEN'S SHOES",
        price: "$ 120.95"
    },
    {
        image: "images/Product5.jpg",
        name: "VELOCITY NITRO SHOES",
        category: "MEN'S SHOES",
        price: "$ 110.35"
    },
    {
        image: "images/Product6.jpg",
        name: "FAST-TRACK APEX NITRO",
        category: "WOMEN'S SHOES",
        price: "$ 130.00"
    },
    {
        image: "images/Product7.jpg",
        name: "NITRO 2 RUNNING",
        category: "MEN'S SHOES",
        price: "$ 159.00"
    },
    {
        image: "images/Product8.jpg",
        name: "FANDOM XT 4",
        category: "MEN'S SHOES",
        price: "$ 119.25"
    },
];

const container = document.getElementById("ProductPage");

products.forEach(p => {
    container.innerHTML += `
        <div class="ProductOffer">
            <img id="productImage" src="${p.image}" alt="">
            <p class="margin0" id="ProductName">${p.name}</p>
            <div id="ProductCatPrice">
                <p class="margin0" id="ProductCategory">${p.category}</p>
                <p class="margin0" id="ProductPrice">${p.price}</p>
            </div>
        </div>
    `;
});
