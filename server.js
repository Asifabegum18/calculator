const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Tell Express to serve all static files from the 'public' folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


