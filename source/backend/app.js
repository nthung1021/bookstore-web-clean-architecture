const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./infrastructure/database/mysql/sequelize');
const seed = require('./infrastructure/database/mysql/seed');

const app = express();
const userRoutes = require('./interfaces/routes/UserRoutes');
const productRoutes = require('./interfaces/routes/ProductRoutes');
const cartRoutes = require('./interfaces/routes/CartRoutes');
const orderRoutes = require('./interfaces/routes/OrderRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

const port = process.env.PORT || 3000;

sequelize.sync()
    .then(async () => {
        console.log('Database synced!');
        await seed.seedProducts();
        console.log('Database seeded with products!');
        app.listen(port, () => console.log('Server running on port ' + port));
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });