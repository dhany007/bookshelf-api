const bookHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookHandler.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: bookHandler.getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: bookHandler.getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: bookHandler.editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: bookHandler.deleteBookByIdHandler,
  },
];

module.exports = routes;
