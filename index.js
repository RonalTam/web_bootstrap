document.addEventListener("DOMContentLoaded", function() {
    const cartBtn = document.getElementById("cart-btn");
    const minicart = document.getElementById("minicart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    let cart = [];
  
    // Hiển thị/ẩn Minicart khi nhấn vào biểu tượng giỏ hàng
    cartBtn.addEventListener("click", function() {
      minicart.style.display = (minicart.style.display === "none" || !minicart.style.display) ? "block" : "none";
    });

  });