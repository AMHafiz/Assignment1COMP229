const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('{"message": "Welcome to my portfolio application"}');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});