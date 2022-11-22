const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.js');
const newUserController = require('./controllers/createUser.js');
const port = 3030;

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
