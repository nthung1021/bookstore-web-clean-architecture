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
|    name    |   text   | unique not null       |
|  password  |   text   | not null              |

**Product**:

|   Column      | DataType | Constraint            |
| :-----------: | :------: | --------------------- |
|     id        |  bigint  | primary key identity  |
|    name       |   text   | unique not null       |
|    price      |  float   | not null              |
|    stock      |   int    | not null              |
|  description  |   text   | not null              |
|    image      |   text   | not null              |

**Cart**:

|   Column   | DataType | Constraint            |
| :--------: | :------: | --------------------- |
|  user_id   |  bigint  | primary key identity  |
|  book_id   |  bigint  | primary key identity  |
|  quantity  |  int     | default: 1            |

**Order**:

|   Column    | DataType | Constraint            |
| :---------: | :------: | --------------------- |
|     id      |  bigint  | primary key identity  |
|  user_id    |  bigint  | not null              |
|  order_time |   time   | default: now          |
|  total_cost |   float  | not null              |

**OrderProduct**:

|   Column    | DataType | Constraint            |
| :---------: | :------: | --------------------- |
|  order_id   |  bigint  | primary key identity  |
|  product_id |  bigint  | primary key identity  |
|  quantity   |   int    | not null              |
| total_price |  float   | not null              |

## Deployment

### Localhost

To run this website locally you have to follow these steps here:

**Backend**

- Download and install MySQL Workbench (Community Edition) for hosting database locally, link download (choose the file `mysql-installer-community-<version>.msi`): https://dev.mysql.com/downloads/installer/

- Create environment file (.env) inside source/backend folder, which will look like this:

```
PORT=3000               # Port of the backend, default is 3000
DB_TYPE=mysql           # Type of database used (MySQL, PostgreSQL,...), default is mysql
DB_HOST=localhost       # Database host, default is localhost
DB_PORT=3306            # Port of the database, default is 3306
DB_USER=root            # Name of the user managing the database, default is root
DB_PASS=<user-password> # Password of the user, can be the root user
DB_NAME=bookstore-ca    # Name of the database, can be any name, default is bookstore-ca
```

- Open CMD and run the following commands to run the backend

```
# Change the current directory to the backend folder
cd source/backend

# Install the packages used in the backend (mentioned in package.json)
npm install

# Start the backend
npm start
```

**Frontend**

- Open another CMD window and run these command to start the frontend locally:

```
# Change the current directory to the frontend folder
cd source/frontend

# Run the frontend (static site) using http-server
npx http-server
```

> [!NOTE]
> When using http-server to run in the first time, it will ask for installing http-server package, just install it first and then it will run automatically

> [!IMPORTANT]
> To run both backend and frontend, you have to open 2 CMD windows (1 for running frontend and another for running backend)

## Other version

**Microservices**

You can check this version of my online bookstore website that was made using microservices architecture here:

[GitHub Repo](https://github.com/nthung1021/bookstore-web-microservices)