const express = require('express');
const jwt = require('jsonwebtoken');
const { findUser, createUser, users } = require('../data/users');

const router = express.Router();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access-secret-key';

router.get('/', async (req, res) => {
  res.json(users.map(({ username, createdAt }) => ({ username, createdAt })));
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }

  try {
    const newUser = await createUser({ username, password });
    return res.status(201).json({ message: 'User registered', user: { username: newUser.username, createdAt: newUser.createdAt } });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }

  const user = await findUser(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign({ data: { username: user.username } }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  req.session.authorization = { accessToken };

  res.json({ message: 'User successfully logged in', accessToken });
});

router.get('/me', (req, res) => {
  const sessionAuth = req.session.authorization;
  if (!sessionAuth || !sessionAuth.accessToken) {
    return res.status(403).json({ message: 'User not logged in' });
  }

  jwt.verify(sessionAuth.accessToken, ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'User not authenticated' });
    }
    res.json({ user: payload.data });
  });
});

module.exports = router;
