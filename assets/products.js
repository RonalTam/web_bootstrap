function changeMainImage(thumbnail) {
    // Lấy phần tử ảnh chính
    const mainImg = document.getElementById('mainImg');
    
    // Đặt thuộc tính src của ảnh chính bằng src của ảnh nhỏ được nhấp
    mainImg.src = thumbnail.src;
}