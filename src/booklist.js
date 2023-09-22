import React from 'react';

function BookList({ books }) {
  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publication</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication}</td>
              <td>{typeof book.price === 'number' ? `$${book.price.toFixed(2)}` : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
