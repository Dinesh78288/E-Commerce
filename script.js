// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to cart
function addToCart(name, price, image) {
  const product = { name, price, image };

  // Check if product already exists in cart
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    alert(name + " is already in your cart!");
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
  }
}

// Function to update cart count in header
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Function to display cart items on cart.html
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80">
      <div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  displayCart();
});
