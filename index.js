const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Phục vụ các file tĩnh từ thư mục public
app.use(express.static('public'));

// Hoặc nếu bạn muốn phục vụ từ thư mục gốc
app.use(express.static('./'));

// Route chính, trả về file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});