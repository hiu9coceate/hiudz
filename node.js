const express = require('express');
const app = express();

// Lấy cổng từ biến môi trường PORT
const port = process.env.PORT || 3000;  // Nếu không có `PORT`, sẽ sử dụng 3000 làm mặc định

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
