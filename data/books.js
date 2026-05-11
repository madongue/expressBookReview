const books = [
  {
    isbn: '9780143127741',
    title: 'The Martian',
    author: 'Andy Weir',
    reviews: [
      { username: 'alice', rating: 5, comment: 'A smart and thrilling survival story.' },
      { username: 'bob', rating: 4, comment: 'Engaging science and humor.' }
    ]
  },
  {
    isbn: '9780062316097',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    reviews: [
      { username: 'charlie', rating: 5, comment: 'Beautiful, inspiring, and timeless.' }
    ]
  },
  {
    isbn: '9780307277671',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    reviews: [
      { username: 'diana', rating: 5, comment: 'Heartbreaking and unforgettable.' }
    ]
  },
  {
    isbn: '9780553380163',
    title: 'Dune',
    author: 'Frank Herbert',
    reviews: [
      { username: 'edward', rating: 5, comment: 'Epic world-building and politics.' }
    ]
  }
];

function getAllBooks() {
  return Promise.resolve(books);
}

function findBookByISBN(isbn) {
  return Promise.resolve(books.find((book) => book.isbn === isbn));
}

function searchBooks({ isbn, author, title }) {
  return Promise.resolve(
    books.filter((book) => {
      const matchesISBN = isbn ? book.isbn === isbn : true;
      const matchesAuthor = author ? book.author.toLowerCase().includes(author.toLowerCase()) : true;
      const matchesTitle = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;
      return matchesISBN && matchesAuthor && matchesTitle;
    })
  );
}

module.exports = {
  books,
  getAllBooks,
  findBookByISBN,
  searchBooks
};
