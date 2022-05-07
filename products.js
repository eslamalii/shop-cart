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
  products.forEach((product, i) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.classList.add(`product--${i}`);
    productElement.setAttribute("id", i);
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

const updateUI = (parent, operation, index) => {
  const productItem = productsData[index]; // gets the appropriate object from the array
  const button = [...parent.children].filter((parent) =>
    parent.classList.contains("buttons")
  ); // filters all the child element of the parent to the buttons container

  const input = [...button[0].children].filter((child) =>
    child.classList.contains("value")
  ); // filters all the child element of the buttons container to the input field

  if (operation === "decrement") {
    productItem.quantity -= 1;
    productItem.quantity <= 0
      ? (productItem.quantity = 0)
      : productItem.quantity--; // operations done on the object property
    input[0].setAttribute("value", productItem.quantity); //updates the ui
  }

  if (operation === "increasement") {
    productItem.quantity += 1; // operations done on the object property
    // if(productItem.quantity === 0 ){
    //   button[0].
    // }
    input[0].setAttribute("value", productItem.quantity); //updates the ui
  }
};

const productItems = [...document.querySelectorAll(".product")];
main.addEventListener("click", (e) => {
  let parent;
  productItems.forEach((product, i) => {
    if (e.target.closest(`.product--${i}`)) {
      parent = e.target.closest(`.product--${i}`); // gets the parent element
    }
  });

  // looks if the the button contains either one of these classes
  if (e.target.classList.contains("decrement")) {
    index = parent.getAttribute("id"); // gets the index
    updateUI(parent, "decrement", index); // updates the ui with these parameters
  }

  if (e.target.classList.contains("increasement")) {
    index = parent.getAttribute("id"); // gets the index
    updateUI(parent, "increasement", index); // updates the ui with these parameters
  }
});

// Filters

const filterItems = document.querySelectorAll(".filter-item");
filterItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    filterItems.forEach((f) => f.classList.remove("active"));
    e.target.classList.add("active");

    var arr = [];

    productsData.forEach((item) => {
      if (e.target.innerHTML === item.category) arr.push(item);
    });
    showProcuts(arr);

    if (e.target.innerHTML === "All") showProcuts(productsData);
  });
});
