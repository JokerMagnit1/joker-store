const items = [
  { id: 1, name: "🔥 Футболка", price: 79000 },
  { id: 2, name: "🎧 Наушники", price: 229000 },
  { id: 3, name: "💻 Мини-клавиатура", price: 189000 },
  { id: 4, name: "🖼 Постер", price: 29000 },
];

let cart = [];
let total = 0;
const totalEl = document.getElementById("total");
const itemsEl = document.getElementById("items");

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "item";
  el.innerHTML = `<h3>${item.name}</h3><p>${item.price.toLocaleString()} сум</p><button>+ В корзину</button>`;
  el.querySelector("button").addEventListener("click", () => {
    total += item.price;
    cart.push(item);
    totalEl.innerText = total.toLocaleString();
  });
  itemsEl.appendChild(el);
});

document.getElementById("payBtn").addEventListener("click", () => {
  const address = document.getElementById("address").value;
  const message = {
    total,
    items: cart.map(x => x.name),
    address,
  };
  Telegram.WebApp.sendData(JSON.stringify(message));
});
