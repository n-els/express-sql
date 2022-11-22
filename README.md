# express-sql

A simple RESTful API connected to a PostgreSQL database.

Based on [node.js](https://nodejs.dev/) and [express.js](https://expressjs.com/), coupled with the power of the
[postgreSQL client](https://www.npmjs.com/package/pg) and a clean, lightweight and scalable folder structure.


## Usage

To use this example, you need to clone this repository

```sh
git clone https://github.com/n-els/express-sql.git
```
Install all dependencies from the package.json with npm
```sh
npm i
```
Customize the connectionString (located in /db/index.js
(You should use an [.environment variable](https://www.npmjs.com/package/dotenv) here!)

```sh
const  connectionString  =  process.env.DB_CONNECTION_STRING;
```
Now you should be able to start your server with
```sh
npm start
```
To permanently "watch" your server (powered by nodemon), you should instead run
```sh
npm run dev
```

