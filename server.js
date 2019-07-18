const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Use routes
app.use('/api/topic', require('./routes/api/topic'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer started on port ${PORT}`));
