class Product {
    constructor({ id, name, price, stock, description, image }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.image = image;
    }
}
module.exports = Product;