const express = require('express');
const userRoutes = require('./interfaces/routes/UserRoutes');
const productRoutes = require('./interfaces/routes/ProductRoutes');

const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running on port ' + port));