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
  },
  {
    isbn: '9780451524935',
    title: '1984',
    author: 'George Orwell',
    reviews: [
      { username: 'frank', rating: 5, comment: 'Dystopian masterpiece.' }
    ]
  },
  {
    isbn: '9780061120084',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    reviews: [
      { username: 'grace', rating: 5, comment: 'A timeless classic about justice.' }
    ]
  },
  {
    isbn: '9780316769174',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    reviews: [
      { username: 'henry', rating: 4, comment: 'Coming-of-age tale.' }
    ]
  },
  {
    isbn: '9780141439570',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    reviews: [
      { username: 'iris', rating: 5, comment: 'Romantic and witty.' }
    ]
  },
  {
    isbn: '9780374529857',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    reviews: [
      { username: 'jack', rating: 5, comment: 'Jazz age brilliance.' }
    ]
  },
  {
    isbn: '9780192806994',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    reviews: [
      { username: 'kate', rating: 5, comment: 'Thought-provoking future.' }
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
