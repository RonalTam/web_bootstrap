document.getElementById('submitBtn').addEventListener('click', function (event) {
  // Lấy giá trị của ô input
  const inputField = document.getElementById('emailOrPhone');
  const inputValue = inputField.value.trim();
  const feedback = document.getElementById('feedback');

  // Kiểm tra xem ô input có trống hay không
  if (inputValue === "") {
    // Ngăn chặn việc submit form
    event.preventDefault();

    // Hiển thị thông báo lỗi và thêm lớp 'is-invalid'
    inputField.classList.add('is-invalid');
    feedback.style.display = 'block';
  } else {
    // Nếu người dùng đã nhập dữ liệu, bỏ lớp 'is-invalid' và thêm 'is-valid'
    inputField.classList.remove('is-invalid');
    inputField.classList.add('is-valid');
    feedback.style.display = 'none';

    // Bạn có thể xử lý form tiếp theo ở đây (submit hoặc các hành động khác)
  }
});

$('.nav-item').hover(function () {
  // Hiện dropdown-menu
  $('.dropdown-menu', this).stop(true, true).slideDown();
  $('.overlay').fadeIn(); // Hiện lớp phủ
}, function () {
  // Ẩn dropdown-menu
  $('.dropdown-menu', this).stop(true, true).slideUp();
  $('.overlay').fadeOut(); // Ẩn lớp phủ
});

// Ẩn lớp phủ khi click bên ngoài dropdown-menu
$(document).click(function (e) {
  if (!$(e.target).closest('.nav-item').length) {
    $('.dropdown-menu').slideUp();
    $('.overlay').fadeOut(); // Ẩn lớp phủ
  }
});
