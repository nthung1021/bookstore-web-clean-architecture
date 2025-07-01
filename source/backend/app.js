const express = require('express');
const productRoutes = require('./interfaces/routes/ProductRoutes');

const app = express();
app.use(express.json());
app.use('/api/product', productRoutes);

app.use(cors({
    origin: process.env.WEB_URL,
    credentials: true
}));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running on port ' + port));