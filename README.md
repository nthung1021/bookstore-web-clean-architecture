# Simple Online Bookstore Website (Clean Architecture)

## Description

A simple website for selling books to readers, considered as an exercise to build a website based on Clean Architecture (+ Domain-Driven Design)

- Frontend: HTML/CSS (Tailwind CSS) + Javascript
- Backend: Node.js
- Database: MySQL

## Database 

- All features will share the same database
- The database used for this app will have these following tables:

**User**:

|   Column   | DataType | Constraint            |
| :--------: | :------: | --------------------- |
|     id     |    int   | primary key identity  |
|  username  |   text   | unique not null       |
|  password  |   text   | not null              |
|  create_at |   time   | default: now          |

**Book**:

|   Column      | DataType | Constraint            |
| :-----------: | :------: | --------------------- |
|     id        |  bigint  | primary key identity  |
|    name       |   text   | unique not null       |
|    author     |   text   | not null              |
| publish_date  |   date   | not null              |
|    price      |  float   | not null              |
|  image_url    |   text   |                       |
| created_at    |   time   | default: now          |

**Cart**:

|   Column   | DataType | Constraint            |
| :--------: | :------: | --------------------- |
|  user_id   |  bigint  | primary key identity  |
|  book_id   |  bigint  | primary key identity  |

**Order**:

|   Column    | DataType | Constraint            |
| :---------: | :------: | --------------------- |
|     id      |  bigint  | primary key identity  |
|  user_id    |  bigint  | not null              |
|  order_time |   time   | default: now          |
|  total_cost |   float  | not null              |

**BookOrder**:

|   Column    | DataType | Constraint            |
| :---------: | :------: | --------------------- |
|  order_id   |  bigint  | primary key identity  |
|  book_id    |  bigint  | primary key identity  |
|  book_price |  float   | not null              |
|  qunatity   |   int    | not null              |
| total_price |  float   | not null              |

## Other version

**Microservices**

You can check this version of my online bookstore website that was made using microservices architecture here:

GitHub: https://github.com/nthung1021/bookstore-web-microservices