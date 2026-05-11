const axios = require('axios');

const BASE_URL = 'http://localhost:5001';

// Function to get all books using async/await
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    if (response.status === 200) {
      console.log('Successfully retrieved all books');
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('Books endpoint not found');
    } else {
      console.error('Error fetching all books:', error.message);
    }
    throw error;
  }
};

// Function to get book by ISBN using async/await
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${isbn}`);
    if (response.status === 200) {
      console.log(`Successfully retrieved book with ISBN ${isbn}`);
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Book with ISBN ${isbn} not found`);
    } else {
      console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
    }
    throw error;
  }
};

// Function to get books by author using async/await
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/search`, {
      params: { author }
    });
    if (response.status === 200) {
      if (response.data.length === 0) {
        console.log(`No books found for author: ${author}`);
      } else {
        console.log(`Successfully retrieved ${response.data.length} book(s) by ${author}`);
      }
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Author ${author} not found`);
    } else {
      console.error(`Error fetching books by author ${author}:`, error.message);
    }
    throw error;
  }
};

// Function to get books by title using async/await
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/search`, {
      params: { title }
    });
    if (response.status === 200) {
      if (response.data.length === 0) {
        console.log(`No books found with title: ${title}`);
      } else {
        console.log(`Successfully retrieved ${response.data.length} book(s) with title ${title}`);
      }
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Title ${title} not found`);
    } else {
      console.error(`Error fetching books by title ${title}:`, error.message);
    }
    throw error;
  }
};

// Function to get all books using promise callbacks
const getAllBooksWithPromise = () => {
  return axios.get(`${BASE_URL}/books`)
    .then(response => {
      if (response.status === 200) {
        console.log('Successfully retrieved all books');
        return response.data;
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error('Books endpoint not found');
      } else {
        console.error('Error fetching all books:', error.message);
      }
      throw error;
    });
};

// Function to get book by ISBN using promise callbacks
const getBookByISBNWithPromise = (isbn) => {
  return axios.get(`${BASE_URL}/books/${isbn}`)
    .then(response => {
      if (response.status === 200) {
        console.log(`Successfully retrieved book with ISBN ${isbn}`);
        return response.data;
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error(`Book with ISBN ${isbn} not found`);
      } else {
        console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
      }
      throw error;
    });
};

// Function to get books by author using promise callbacks
const getBooksByAuthorWithPromise = (author) => {
  return axios.get(`${BASE_URL}/books/search`, {
    params: { author }
  })
    .then(response => {
      if (response.status === 200) {
        if (response.data.length === 0) {
          console.log(`No books found for author: ${author}`);
        } else {
          console.log(`Successfully retrieved ${response.data.length} book(s) by ${author}`);
        }
        return response.data;
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error(`Author ${author} not found`);
      } else {
        console.error(`Error fetching books by author ${author}:`, error.message);
      }
      throw error;
    });
};

// Function to get books by title using promise callbacks
const getBooksByTitleWithPromise = (title) => {
  return axios.get(`${BASE_URL}/books/search`, {
    params: { title }
  })
    .then(response => {
      if (response.status === 200) {
        if (response.data.length === 0) {
          console.log(`No books found with title: ${title}`);
        } else {
          console.log(`Successfully retrieved ${response.data.length} book(s) with title ${title}`);
        }
        return response.data;
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error(`Title ${title} not found`);
      } else {
        console.error(`Error fetching books by title ${title}:`, error.message);
      }
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
