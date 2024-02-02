const btn = document.querySelector("button");
let shopItems = document.querySelector("#items");
let shoping = document.querySelector(".shopping-cart");
let total = document.querySelector(".total");
let menus = document.querySelector(".menus");
let quantity = document.querySelector("#quantity");

btn.addEventListener("click", () => {
  const sidenav = document.querySelector(".shopping-cart");
  sidenav.style.display = "flex";
});
function hide() {
  const sidenav = document.querySelector(".shopping-cart");
  sidenav.style.display = "none";
}

let products = [
  {
    id: 1,
    name: "Some Soup",
    price: 20,
    img: "menu-1.png",
  },
  {
    id: 2,
    name: "noodles",
    price: 35,
    img: "menu-2.png",
  },
  {
    id: 3,
    name: "Fried rice",
    price: 30,
    img: "menu-3.png",
  },
  {
    id: 4,
    name: "Tofu Spicy",
    price: 25,
    img: "menu-4.png",
  },
  {
    id: 5,
    name: "Raw meet",
    price: 33,
    img: "menu-5.png",
  },
  {
    id: 6,
    name: "Shrimp with peas",
    price: 35,
    img: "menu-6.png",
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="menu">
          <img src="scotich/${value.img}" alt="">
          <div class="text">
            <p>${value.name}</p>
            <p>${value.price.toLocaleString()}$</p>
          </div>
          <button onclick="addToCard(${key})">Order</button>
        </div>
    `;
    menus.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  shopItems.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    
    if (value != null) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `
        <div id = product-id-${value.id} class="item">
            <div class="info">
                <p>${value.name}</p>
                <p>${value.price.toLocaleString()}$</p>
                        <div class="quantity">
                            <span onclick="changeQuantity(${key}, ${value.quantity - 1})" class="minus">-</span>
                            <span id="quantity">${value.quantity}</span>
                            <span onclick="changeQuantity(${key}, ${value.quantity + 1})" class="plus">+</span>
                            </div>
                    </div>
                    <img src="scotich/${value.img}" alt="" />
                </div>
    `;
    shopItems.appendChild(newDiv)
    }
  });
  total.innerHTML = `Total price :   ${totalPrice.toLocaleString()}$`

}

function changeQuantity(key, quantity) {
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity *  products[key].price 
    }
    reloadCard();
}


