let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function addToCart(item) {
    let existingItem = cart.find(i => i.name === item.name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(`${item.name} added to cart!`);
}

function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
}

function filterMenu(query, items) {
    if (!query) return items;
    return items.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
    );
}

window.addEventListener('DOMContentLoaded', updateCartCount);
