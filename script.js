// <!-- 7. JavaScript Engine -->
const VENDOR_PHONE = "2348130976312";
const ADMIN_PIN = "1234";
let isAdminUnlocked = false;

const defaultProducts = [
  {
    "name": "Samsung S25",
    "specs": "6.2\" | Snapdragon 8 Elite processor | 50MP triple-camera",
    "price": 500000,
    "img": "data:image/webp;base64,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"
  },
  {
    "name": "Infinix Hot 70",
    "specs": "6.78'' | 6GB RAM | 256GB ROM | Android 16",
    "price": 210000,
    "img": "data:image/webp;base64,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"
  },
  {
    "name": "Tecno spark 50",
    "specs": "6.78'' | 4GB RAM | 256GB ROM | Android 16",
    "price": 250000,
    "img": "https://th.bing.com/th/id/OIP.kNHkC4UWhNdfYAV3SeSj6gAAAA?w=200&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    "name": "Apple iPhone 13",
    "specs": "6.1'' | 128GB ROM | 4 GB RAM",
    "price": 425000,
    "img": "https://th.bing.com/th/id/OIP.LnM7nmmzkzaG0g0qWIK51AHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    "name": "Google pixel 10",
    "specs": "16GB RAM | 256GB ROM | 4k Display | 50MP camera",
    "price": 500000,
    "stock": 4,
    "img": "data:image/webp;base64,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"
  }
];

let savedProducts = JSON.parse(localStorage.getItem("apex_products"));
let products = savedProducts ? savedProducts : defaultProducts;

let cart = JSON.parse(localStorage.getItem("apex_cart")) || [];
let isCartOpen = false; // Tracks whether the user opened the cart drawer

window.onload = function() {
  const savedName = localStorage.getItem("apex_customer_name");

  if (savedName) document.getElementById("customerName").value = savedName;

  renderProducts();
  updateCartUI();
};

function openCartDrawer() {
  isCartOpen = true;
  updateCartUI();
}

function closeCartDrawer() {
  isCartOpen = false;
  updateCartUI();
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  let cardsHTML = "";

  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    let actionAreaHTML = "";

    if (isAdminUnlocked) {
      actionAreaHTML = `
        <div class="admin-card-controls">
          <button class="btn-delete-product" onclick="deleteProduct(${i})">🗑️ Remove Listing</button>
        </div>
      `;
    } else {
      actionAreaHTML = `<button class="btn-add" onclick="addToCartByIndex(${i}, this)">Add to Order +</button>`;
    }

    cardsHTML = cardsHTML + `
      <article class="card">
        <img src="${prod.img}" alt="${prod.name}" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${prod.name}</h3>
          <p class="card-specs">${prod.specs}</p>
          <div class="card-price">₦${Number(prod.price).toLocaleString()}</div>
          ${actionAreaHTML}
        </div>
      </article>
    `;
  }

  grid.innerHTML = cardsHTML;
}

function unlockAdmin() {
  const adminPanel = document.getElementById("adminPanel");
  if (!adminPanel) {
    alert("Please uncomment the Admin Panel section in index.html first.");
    return;
  }

  if (isAdminUnlocked) {
    lockAdminMode();
    return;
  }

  const enteredPin = prompt("Enter Shop Owner PIN (Demo PIN: 1234):");
  if (enteredPin === ADMIN_PIN) {
    isAdminUnlocked = true;
    adminPanel.style.display = "block";
    renderProducts();
    updateCartUI();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (enteredPin !== null) {
    alert("Incorrect PIN!");
  }
}

function lockAdminMode() {
  isAdminUnlocked = false;
  const adminPanel = document.getElementById("adminPanel");
  if (adminPanel) {
    adminPanel.style.display = "none";
  }
  renderProducts();
  updateCartUI();
}

function addNewProduct() {
  const nameInput = document.getElementById("newProdName");
  const priceInput = document.getElementById("newProdPrice");
  const specsInput = document.getElementById("newProdSpecs");
  const imgInput = document.getElementById("newProdImg");

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const specs = specsInput.value.trim() || "Available in stock";
  const img = imgInput.value.trim() || "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80";

  if (name === "" || price <= 0) {
    alert("Please enter a valid Product Name and Price.");
    return;
  }

  products.unshift({
    name: name,
    specs: specs,
    price: price,
    img: img
  });

  localStorage.setItem("apex_products", JSON.stringify(products));
  renderProducts();

  nameInput.value = "";
  priceInput.value = "";
  specsInput.value = "";
  imgInput.value = "";
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("apex_products", JSON.stringify(products));
  renderProducts();
}

function resetDefaultProducts() {
  products = JSON.parse(JSON.stringify(defaultProducts));
  localStorage.setItem("apex_products", JSON.stringify(products));
  renderProducts();
}

function addToCartByIndex(productIndex, buttonElement) {
  const selectedProduct = products[productIndex];
  let existingItem = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === selectedProduct.name) {
      existingItem = cart[i];
      break;
    }
  }

  if (existingItem !== null) {
    existingItem.qty = existingItem.qty + 1;
  } else {
    cart.push({
      name: selectedProduct.name,
      price: Number(selectedProduct.price),
      qty: 1
    });
  }

  localStorage.setItem("apex_cart", JSON.stringify(cart));

  const originalText = buttonElement.innerText;
  buttonElement.innerText = "✓ Added!";
  buttonElement.style.backgroundColor = "#16a34a";

  setTimeout(function() {
    buttonElement.innerText = originalText;
    buttonElement.style.backgroundColor = "#0f172a";
  }, 600);

  updateCartUI();
}

function changeQty(index, change) {
  const item = cart[index];

  item.qty = item.qty + change;
  if (item.qty <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("apex_cart", JSON.stringify(cart));
  updateCartUI();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("apex_cart", JSON.stringify(cart));
  updateCartUI();
}

function clearCart() {
  cart = [];
  isCartOpen = false;
  localStorage.setItem("apex_cart", JSON.stringify(cart));
  updateCartUI();
}

function saveCustomerDetails() {
  localStorage.setItem("apex_customer_name", document.getElementById("customerName").value);
  document.getElementById("errorMsg").style.display = "none";
}

function updateCartUI() {
  const cartDrawer = document.getElementById("cartDrawer");
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");
  const floatingCartCount = document.getElementById("floatingCartCount");
  const floatingCartTotal = document.getElementById("floatingCartTotal");

  if (cart.length === 0 || isAdminUnlocked) {
    cartDrawer.style.display = "none";
    cartToggleBtn.style.display = "none";
    isCartOpen = false;
    return;
  }

  let totalUnits = 0;
  let totalAmount = 0;
  let itemsHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemSubtotal = item.price * item.qty;
    totalUnits = totalUnits + item.qty;
    totalAmount = totalAmount + itemSubtotal;

    itemsHTML = itemsHTML + `
      <div class="cart-item-row">
        <span>${item.qty}x ${item.name} (₦${itemSubtotal.toLocaleString()})</span>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${i}, -1)">-</button>
          <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
          <button class="remove-btn" onclick="removeItem(${i})">Remove</button>
        </div>
      </div>
    `;
  }

  cartItemsList.innerHTML = itemsHTML;
  cartCount.innerText = totalUnits + (totalUnits === 1 ? " item in cart" : " items in cart");
  cartTotal.innerText = "₦" + totalAmount.toLocaleString();

  floatingCartCount.innerText = totalUnits;
  floatingCartTotal.innerText = "₦" + totalAmount.toLocaleString();

  if (isCartOpen) {
    cartDrawer.style.display = "flex";
    cartToggleBtn.style.display = "none";
  } else {
    cartDrawer.style.display = "none";
    cartToggleBtn.style.display = "inline-flex";
  }
}

function checkoutOnWhatsApp() {
  const nameInput = document.getElementById("customerName");
  const errorMsg = document.getElementById("errorMsg");

  const customerName = nameInput.value.trim();

  if (customerName === "") {
    errorMsg.style.display = "block";
    return;
  }

  let totalAmount = 0;
  let orderLines = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemSubtotal = item.price * item.qty;
    totalAmount = totalAmount + itemSubtotal;
    orderLines = orderLines + (i + 1) + ". " + item.qty + "x " + item.name + " - ₦" + itemSubtotal.toLocaleString() + "\n";
  }

  const fullMessage = "Hello Fest Tech Gadgets! I would like to place an order:\n\n"
                    + "*Order Items:*\n" + orderLines
                    + "\n*Total Amount: ₦" + totalAmount.toLocaleString() + "*\n\n"
                    + "*Customer Details:*\n"
                    + "👤 Name: " + customerName + "\n\n"
                    + "Please confirm availability and delivery fee.";

  window.open("https://wa.me/" + VENDOR_PHONE + "?text=" + encodeURIComponent(fullMessage), "_blank");
}