const express = require('express');
const app = express();

// Lấy cổng từ biến môi trường PORT
const port = process.env.PORT || 3000;  // Nếu không có `PORT`, sẽ sử dụng 3000 làm mặc định

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.js - Mã client-side (chạy trong trình duyệt)

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn-close').addEventListener('click', function() {
        console.log('Button clicked');
        // Thực hiện hành động khi nút được bấm
    });
});


document.querySelector('.btn-close').addEventListener('click', function() {
document.querySelector('.sale').style.display='none';

});

document.querySelector('.btnSE').addEventListener('click', function(event) {
    event.preventDefault(); 
    const menulogo = document.querySelector('.menulogo');
    if (menulogo.style.display === 'none' || menulogo.style.display === '') {
        menulogo.style.display = 'flex'; 
    } else {
        menulogo.style.display = 'none';
    }
});
