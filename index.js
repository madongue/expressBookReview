const express = require('express');
const session = require('express-session');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  session({
    secret: 'fingerprint',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }
  })
);

app.use('/books', booksRouter);
app.use('/user', usersRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Book Review API is running', routes: ['/books', '/user/register', '/user/login'] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
