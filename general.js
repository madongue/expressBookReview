const axios = require('axios');

const BASE_URL = 'http://localhost:5001';

// Function to get all books using async/await
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error.message);
    throw error;
  }
};

// Function to get book by ISBN using async/await
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
    throw error;
  }
};

// Function to get books by author using async/await
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/search`, {
      params: { author }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error.message);
    throw error;
  }
};

// Function to get books by title using async/await
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/search`, {
      params: { title }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by title ${title}:`, error.message);
    throw error;
  }
};

// Function to get all books using promise callbacks
const getAllBooksWithPromise = () => {
  return axios.get(`${BASE_URL}/books`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching all books:', error.message);
      throw error;
    });
};

// Function to get book by ISBN using promise callbacks
const getBookByISBNWithPromise = (isbn) => {
  return axios.get(`${BASE_URL}/books/${isbn}`)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
      throw error;
    });
};

// Function to get books by author using promise callbacks
const getBooksByAuthorWithPromise = (author) => {
  return axios.get(`${BASE_URL}/books/search`, {
    params: { author }
  })
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching books by author ${author}:`, error.message);
      throw error;
    });
};

// Function to get books by title using promise callbacks
const getBooksByTitleWithPromise = (title) => {
  return axios.get(`${BASE_URL}/books/search`, {
    params: { title }
  })
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching books by title ${title}:`, error.message);
      throw error;
    });
};

// Export functions
module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getAllBooksWithPromise,
  getBookByISBNWithPromise,
  getBooksByAuthorWithPromise,
  getBooksByTitleWithPromise
};
