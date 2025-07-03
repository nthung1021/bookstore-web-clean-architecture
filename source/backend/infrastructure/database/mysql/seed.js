const sequelize = require('./sequelize');
const ProductModelMySQL = require('./product/ProductModelMySQL');

async function seedProducts() {
    try {
        await ProductModelMySQL.bulkCreate(
            [
                {
                    id: 1,
                    name: "The Pragmatic Programmer",
                    price: 39.99,
                    stock: 100,
                    description: "A timeless guide offering practical principles and real-world anecdotes to help software developers write maintainable, flexible, and robust code. Covers topics from debugging and testing to career growth and automation.",
                    image: "https://m.media-amazon.com/images/I/71f1jieYHNL.jpg"
                },
                {
                    id: 2,
                    name: "The Phoenix Project",
                    price: 29.95,
                    stock: 50,
                    description: "A fast-paced business novel that illustrates DevOps principles through the story of an IT manager racing against time to turn around a failing IT project using workflow optimization and cultural change.",
                    image: "https://bizweb.dktcdn.net/thumb/grande/100/439/764/products/613-bia-truoc-001-logo.jpg?v=1677228874513"
                },
                {
                    id: 3,
                    name: "The DevOps Handbook",
                    price: 34.99,
                    stock: 75,
                    description: "A comprehensive guide detailing practical methods for implementing DevOps in organizations, including value stream mapping, continuous delivery, and cultural transformation to increase efficiency.",
                    image: "https://m.media-amazon.com/images/I/71mhqEw8LcL.jpg"
                },
                {
                    id: 4,
                    name: "Code: The Hidden Language of Computer Hardware and Software",
                    price: 44.50,
                    stock: 120,
                    description: "An accessible exploration of how computers work from the ground up, bridging hardware and software through clear explanations and engaging illustrations.",
                    image: "https://static.fnac-static.com/multimedia/Images/PT/NR/8d/02/82/8520333/1507-1.jpg"
                },
                {
                    id: 5,
                    name: "Introduction to Algorithms",
                    price: 89.95,
                    stock: 80,
                    description: "The classic CLRS textbook offering a rigorous and in-depth treatment of algorithms and data structures, ideal for students and professionals alike.",
                    image: "https://static-01.shop.com.mm/p/c8007c0058f87cee153b7ed56f9fc9b0.jpg"
                },
                {
                    id: 6,
                    name: "Principles of Information Security",
                    price: 59.99,
                    stock: 60,
                    description: "A foundational textbook covering core principles of information security, risk management, cryptography, and security policies for students and practitioners.",
                    image: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&productISBN13=9780357506431"
                },
                {
                    id: 7,
                    name: "The Road Ahead",
                    price: 24.99,
                    stock: 90,
                    description: "Bill Gates’s visionary look at the future of computing and the Internet, written in the mid-1990s, predicting technological shifts and their societal impact.",
                    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/The_Road_Ahead_%28Bill_Gates_book%29.jpg/250px-The_Road_Ahead_%28Bill_Gates_book%29.jpg"
                },
                {
                    id: 8,
                    name: "The Internet Galaxy",
                    price: 32.00,
                    stock: 0,
                    description: "A socio-economic and cultural analysis of the Internet’s emergence, exploring how it has reshaped society and global communication.",
                    image: "https://upload.wikimedia.org/wikipedia/en/6/65/The_Internet_Galaxy.jpg"
                }
            ],
            { ignoreDuplicates: true }
        );
        console.log('Products seeded successfully!');
    } catch (err) {
        console.error('Seeding failed:', err);
    }
}

module.exports = { seedProducts };