const express = require('express');
const bookRoutes = require('./interfaces/routes/bookRoutes.js');

const app = express();
app.use(express.json());
app.use('/api/book', bookRoutes);

app.use(cors({
    origin: process.env.WEB_URL,
    credentials: true
}));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running on port ' + port));