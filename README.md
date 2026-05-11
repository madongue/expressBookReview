# Book Review API

A simple Node.js + Express server for an online book review application.

## Features

- List all books
- Search books by ISBN, author, or title
- View book details and reviews
- Register new users
- Login with session + JWT authentication
- Add, update, and delete reviews for authenticated users

## Local setup

1. Install Node.js and npm
2. Run `npm install`
3. Start the server with `npm start`
4. Use the API endpoints:
   - `GET /books`
   - `GET /books/search?author=...&title=...`
   - `GET /books/:isbn`
   - `GET /books/:isbn/reviews`
   - `POST /user/register`
   - `POST /user/login`
   - `POST /books/:isbn/review`
   - `PUT /books/:isbn/review`
   - `DELETE /books/:isbn/review`

## Note

The workspace currently has no `npm` available in the terminal environment, so dependencies could not be installed here. Install Node.js locally and run `npm install` from `c:\Users\LESLINE\Desktop\Node` to complete setup.
