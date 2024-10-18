document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
    <div class="empty-cart-message">
      <p>Giỏ hàng của bạn đang trống.</p>
    </div>
  `;
            // checkoutBtn.disabled = true;
        } else {
            cart.forEach((item) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'list-group-item','border-0', 'border-bottom');
                cartItem.innerHTML = `
                <div class="d-flex justify-content-between">
                    <img src="${item.image}" class="img-fluid" style="width: 60px; height: 80px"  alt="${item.name}">
                    <div class="cart-item-info mt-3" style="margin-left: -30%;">
                      <h5>${item.name}</h5>
                      <p>Giá: ${item.price} ₫</p>
                    </div>
                    <div class="cart-item-actions mt-3">
                      <button class="btn btn-sm border me-2" data-id="${item.id}" onclick="decreaseQuantity(${item.id})">-</button>
                      <span>${item.quantity}</span>
                      <button class="btn btn-sm border ms-2" data-id="${item.id}" onclick="increaseQuantity(${item.id})">+</button>
                      <button class="btn btn-sm border ms-5" onclick="removeFromCart(${item.id})">Xóa</button>
                    </div>
                </div>
    `;
                cartItemsContainer.appendChild(cartItem);
                total += item.price * item.quantity;
            });

            // checkoutBtn.disabled = false;
        }

        cartTotal.innerText = `${total} ₫`;
    }


    // Hàm tăng số lượng sản phẩm
    window.increaseQuantity = function (id) {
        const product = cart.find(item => item.id === id);
        product.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    // Hàm giảm số lượng sản phẩm
    window.decreaseQuantity = function (id) {
        const product = cart.find(item => item.id === id);
        if (product.quantity > 1) {
            product.quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        renderCart();
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    window.removeFromCart = function (id) {
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    renderCart();
});