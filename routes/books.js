const express = require('express');
const jwt = require('jsonwebtoken');
const { getAllBooks, findBookByISBN, searchBooks } = require('../data/books');

const router = express.Router();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access-secret-key';

function authenticate(req, res, next) {
  const sessionAuth = req.session.authorization;
  if (!sessionAuth || !sessionAuth.accessToken) {
    return res.status(403).json({ message: 'User not logged in' });
  }

  jwt.verify(sessionAuth.accessToken, ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'User not authenticated' });
    }
    req.user = payload;
    next();
  });
}

router.get('/', async (req, res) => {
  const allBooks = await getAllBooks();
  res.json(allBooks);
});

router.get('/search', async (req, res) => {
  const { isbn, author, title } = req.query;
  const results = await searchBooks({ isbn, author, title });
  res.json(results);
});

router.get('/:isbn', async (req, res) => {
  const book = await findBookByISBN(req.params.isbn);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

router.get('/:isbn/reviews', async (req, res) => {
  const book = await findBookByISBN(req.params.isbn);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book.reviews || []);
});

router.post('/:isbn/review', authenticate, async (req, res) => {
  const book = await findBookByISBN(req.params.isbn);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { rating, comment } = req.body;
  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
  }

  const review = {
    username: req.user.data.username,
    rating,
    comment: comment || ''
  };

  book.reviews.push(review);
  res.status(201).json({ message: 'Review added', review });
});

router.put('/:isbn/review', authenticate, async (req, res) => {
  const book = await findBookByISBN(req.params.isbn);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const existingReview = book.reviews.find((rev) => rev.username === req.user.data.username);
  if (!existingReview) {
    return res.status(404).json({ message: 'Review by this user not found' });
  }

  const { rating, comment } = req.body;
  if (rating !== undefined) {
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
    }
    existingReview.rating = rating;
  }

  if (comment !== undefined) {
    existingReview.comment = comment;
  }

  res.json({ message: 'Review updated', review: existingReview });
});

router.delete('/:isbn/review', authenticate, async (req, res) => {
  const book = await findBookByISBN(req.params.isbn);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const reviewIndex = book.reviews.findIndex((rev) => rev.username === req.user.data.username);
  if (reviewIndex === -1) {
    return res.status(404).json({ message: 'Review by this user not found' });
  }

  book.reviews.splice(reviewIndex, 1);
  res.json({ message: 'Review deleted' });
});

module.exports = router;
