document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("cart-btn");
  const minicart = document.getElementById("minicart");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  let cart = [];

  // Hiển thị/ẩn Minicart khi nhấn vào biểu tượng giỏ hàng
  cartBtn.addEventListener("click", function () {
    minicart.style.display = (minicart.style.display === "none" || !minicart.style.display) ? "block" : "none";
  });
});


$(document).ready(function () {
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
});
