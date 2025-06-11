const express = require('express');
const bookRoutes = require('./interfaces/routes/bookRoutes.js');

const app = express();
app.use(express.json());
app.use('/api/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running on port ' + port));