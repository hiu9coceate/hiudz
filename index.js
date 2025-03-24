const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Phục vụ các file tĩnh từ thư mục public
app.use(express.static('public'));

// Route chính, trả về file index.html trong thư mục public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Đảm bảo đường dẫn đúng
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
