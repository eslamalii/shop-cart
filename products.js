var main = document.getElementById("main");

var productsData = [
  {
    id: 1,
    name: "Luna Super Emollient Moisturizing Cream Kit - 4 Pcs",
    category: "Personal Care",
    price: "EGP 102",
    quantity: 0,
    image: "./Products/1.jpeg",
   
  },
  {
    id: 2,
    name: "Samsung UA43T5300 - 43-inch Full HD Smart",
    category: "Electronics",
    price: "EGP 7,199.00",
    quantity: 0,
    image: "./Products/2.jpeg",
    
  },
  {
    id: 3,
    name: "Lama Wide Leg Pants- For Women",
    category: "Fashion",
    price: "EGP 200",
    quantity: 0,
    image: "./Products/3.jpeg",
   
  },
  {
    id: 4,
    name: "Lipton Dust Black Tea - 250 gm",
    category: "Supermarket",
    price: "EGP 90",
    quantity: 0,
    image: "./Products/4.jpeg",
   
  },
  {
    id: 5,
    name: "Blankie Kids Hair Cream - 150ml",
    category: "Baby Products",
    price: "EGP 90",
    quantity: 0,
    image: "./Products/5.jpeg",
  },
];

showProcuts(productsData);

function showProcuts(products) {
  main.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <img src="${product.image}"/>
    <div class="product-info">
        <p>${product.name}</p>
        <span class="price" > ${product.price}</span>
    </div>
    <div class="buttons">
        <button class="decrement">-</button>
        <input class="value" value="0" disabled/>
        <button class="increasement">+</button>
    </div>
    `;
    main.appendChild(productElement);
  });
}
